document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const navHeight = 80;

  /*------------------- Efecto de Scroll en Header ------------------*/
  function handleHeaderScroll() {
    if (window.scrollY > 20) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  }

  window.addEventListener("scroll", handleHeaderScroll);
  handleHeaderScroll(); // Check on load

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("header nav a[href^='#']");

  /*------------------- Scroll Suave ------------------*/
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const target = document.querySelector(targetId);
      if (target) {
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - navHeight;
        const startPosition = window.pageYOffset;
        const distance = offsetPosition - startPosition;
        const duration = 800;
        let startTime = null;

        function animation(currentTime) {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) {
            requestAnimationFrame(animation);
          }
        }

        function ease(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return (c / 2) * t * t * t + b;
          t -= 2;
          return (c / 2) * (t * t * t + 2) + b;
        }

        requestAnimationFrame(animation);
      }
    });
  });

  function highlightNavigation() {
    let scrollY = window.scrollY;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          if (link.classList.contains("bg-primary")) return;

          link.classList.remove("text-primary", "border-primary");
          if (link.getAttribute("href").includes(sectionId)) {
            link.classList.add("text-primary", "border-primary");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightNavigation);
  highlightNavigation();

  /*------------------- Formulario de Contacto (Formspree) ------------------*/
  const contactForm = document.getElementById("contact-form");
  const submitBtn = document.getElementById("form-submit-btn");
  const successModal = document.getElementById("success-modal");
  const closeModalBtn = document.getElementById("close-modal-btn");
  const modalContent = document.getElementById("modal-content");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const originalBtnText = submitBtn.innerHTML;
      submitBtn.innerHTML = `Enviando... <span class="material-symbols-outlined text-sm animate-spin">sync</span>`;
      submitBtn.disabled = true;

      const formData = new FormData(contactForm);

      fetch(contactForm.action, {
        method: contactForm.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            // Show Modal
            successModal.classList.remove("opacity-0", "pointer-events-none");
            modalContent.classList.remove("scale-95");
            modalContent.classList.add("scale-100");
            contactForm.reset();
          } else {
            response.json().then((data) => {
              if (Object.hasOwn(data, "errors")) {
                alert(
                  data["errors"].map((error) => error["message"]).join(", "),
                );
              } else {
                alert("Hubo un problema al enviar tu formulario.");
              }
            });
          }
        })
        .catch((error) => {
          alert("Hubo un error de conexión.");
        })
        .finally(() => {
          // Restore button state
          submitBtn.innerHTML = originalBtnText;
          submitBtn.disabled = false;
        });
    });
  }

  // Close Modal Logic
  function closeModal() {
    successModal.classList.add("opacity-0", "pointer-events-none");
    modalContent.classList.remove("scale-100");
    modalContent.classList.add("scale-95");
  }

  if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
  if (successModal) {
    successModal.addEventListener("click", function (e) {
      if (e.target === successModal) closeModal();
    });
  }

  /*------------------- Animación de Progreso (Process Flow) ------------------*/
  const processSteps = document.querySelectorAll(".process-step");
  const progressLine = document.getElementById("process-progress");

  if (processSteps.length > 0 && progressLine) {
    const processObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("step-active");
          } else {
            // Remove the exact class when the element leaves scrolling backwards (up)
            if (entry.boundingClientRect.top > 0) {
              entry.target.classList.remove("step-active");
            }
          }
        });
        updateProgressLine();
      },
      {
        rootMargin: "0px 0px -25% 0px",
        threshold: 0.1,
      },
    );

    processSteps.forEach((step) => processObserver.observe(step));

    // Initial check in case they are already in view
    setTimeout(updateProgressLine, 500);

    function updateProgressLine() {
      const activeSteps = document.querySelectorAll(
        ".process-step.step-active",
      );
      if (activeSteps.length > 0) {
        const lastActive = activeSteps[activeSteps.length - 1];
        const lastIcon = lastActive.querySelector(".process-icon");
        const container = document.querySelector(".max-w-5xl.relative");

        if (lastIcon && container) {
          const containerTop = container.getBoundingClientRect().top;
          const iconTop = lastIcon.getBoundingClientRect().top;
          // Calculate height from top of container to center of the last active icon
          const height = iconTop - containerTop + 32;
          progressLine.style.height = `${Math.max(0, height)}px`;
        }
      } else {
        progressLine.style.height = "0px";
      }
    }

    // Update line height on resize
    window.addEventListener("resize", () => {
      requestAnimationFrame(updateProgressLine);
    });
  }

  /*------------------- Animación 3D de Tarjetas Apiladas ------------------*/
  const stackContainer = document.getElementById("stacked-portfolio-container");
  const stackCards = document.querySelectorAll(".portfolio-card-3d");

  if (stackContainer && stackCards.length > 0) {
    window.addEventListener("scroll", () => {
      const containerRect = stackContainer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const stickyOffset = viewportHeight * 0.25;

      const stickyViewport = document.getElementById("sticky-viewport");
      if (!stickyViewport) return;

      const scrollableDistance =
        containerRect.height - stickyViewport.offsetHeight;

      let progress = (stickyOffset - containerRect.top) / scrollableDistance;
      progress = Math.max(0, Math.min(1, progress));

      const steps = 2;

      stackCards.forEach((card, index) => {
        const stepSize = 1 / steps;
        const cardStartProgress = index * stepSize;
        const cardEndProgress = cardStartProgress + stepSize;

        let cardProgress =
          (progress - cardStartProgress) /
          (cardEndProgress - cardStartProgress);
        cardProgress = Math.max(0, Math.min(1, cardProgress));

        if (progress < cardStartProgress) {
          const depth = index - progress * steps;
          const scale = Math.max(0.8, 1 - depth * 0.05);
          const translateY = depth * 40;
          card.style.transform = `translateY(${translateY}px) scale(${scale})`;
          card.style.opacity = Math.max(0, 1 - depth * 0.3).toString();
        } else if (
          progress >= cardStartProgress &&
          progress < cardEndProgress
        ) {
          const translateY = -(cardProgress * viewportHeight);
          const scale = 1 + cardProgress * 0.2;
          const opacity = 1 - cardProgress;
          card.style.transform = `translateY(${translateY}px) scale(${scale})`;
          card.style.opacity = opacity.toString();
        } else {
          if (index < steps) {
            card.style.opacity = "0";
          } else {
            card.style.transform = `translateY(0px) scale(1)`;
            card.style.opacity = "1";
          }
        }
      });
    });

    window.dispatchEvent(new Event("scroll"));
  }

  /*------------------- Animación Typed.js ------------------*/
  if (document.getElementById("typed")) {
    new Typed("#typed", {
      strings: ["Innovación", "Evolución", "Resultados", "Tecnología"],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
    });
  }

  /*------------------- Modal de Detalles de Proyectos (Compacto) ------------------*/
  const projectDetailsModal = document.getElementById("project-details-modal");
  const projectModalContent = document.getElementById("project-modal-content");
  const closeProjectModalBtn = document.getElementById(
    "close-project-modal-btn",
  );

  const modalHeroBg = document.getElementById("modal-hero-bg");
  const modalHeroImg = document.getElementById("modal-hero-img");
  const modalProjectTitle = document.getElementById("modal-project-title");
  const modalProjectTags = document.getElementById("modal-project-tags");
  const modalProjectHighlights = document.getElementById(
    "modal-project-highlights",
  );
  const modalProjectDescMobile = document.getElementById(
    "modal-project-desc-mobile",
  );
  const modalProjectDescDesktop = document.getElementById("modal-project-desc");
  const modalProjectGallery = document.getElementById("modal-project-gallery");

  const projectsDataCompact = [
    {
      title: "Sistema Automotriz",
      tags: ["Web App", "React", "Java", "MySQL"],
      highlights: [
        { icon: "speed", text: "-40% Tiempo administrativo" },
        { icon: "inventory_2", text: "Control stock en tiempo real" },
        { icon: "notifications_active", text: "Avisos automáticos a clientes" },
      ],
      description:
        "Digitalización integral de un taller mecánico de alto flujo. Los mecánicos actualizan reparaciones desde sus móviles y los administradores controlan el inventario de repuestos y facturación en tiempo real.",
      images: [
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=600",
      ],
    },
    {
      title: "LogiTrack Pro",
      tags: ["SaaS / BI", "React"],
      highlights: [
        { icon: "monitoring", text: "Dashboard Analítico B2B" },
        { icon: "route", text: "Optimización remota de rutas" },
        { icon: "savings", text: "Reducción de costos del 15%" },
      ],
      description:
        "Sistema B2B para rastreo de flotas. Sustituimos hojas de Excel por un panel centralizado e intuitivo con integraciones satelitales para control de rutas y consumo de combustible en vivo.",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1586528116311-ad8ed7c824eb?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=600",
      ],
    },
    {
      title: "FitVexa Health",
      tags: ["App Móvil", "React Native"],
      highlights: [
        { icon: "health_and_safety", text: "Ecosistema integral salud" },
        { icon: "watch", text: "Sincronización con Wearables" },
        { icon: "offline_bolt", text: "Modo Offline nativo" },
      ],
      description:
        "App nativa iOS/Android. Planes nutricionales y de ejercicio con rendimiento fluido a 60fps, notificaciones inteligentes y persistencia de datos offline sincronizados con relojes Apple y Garmin.",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1526506114642-90924089c2ce?auto=format&fit=crop&q=80&w=600",
      ],
    },
  ];

  window.openProjectModal = function (index) {
    const data = projectsDataCompact[index];
    if (!data || !projectDetailsModal) return;

    modalProjectTitle.textContent = data.title;

    if (modalHeroBg && modalHeroImg) {
      modalHeroBg.style.backgroundImage = `url(${data.images[0]})`;
      modalHeroImg.src = data.images[0];
    }

    if (modalProjectTags) {
      modalProjectTags.innerHTML = data.tags
        .map(
          (tag) =>
            `<span class="px-2 py-1 bg-white/10 border border-white/20 text-white text-[10px] font-bold rounded-full uppercase tracking-widest backdrop-blur-md">${tag}</span>`,
        )
        .join("");
    }

    if (modalProjectDescDesktop) {
      modalProjectDescDesktop.textContent = data.description;
    }
    if (modalProjectDescMobile) {
      modalProjectDescMobile.textContent = data.description;
    }

    if (modalProjectHighlights) {
      modalProjectHighlights.innerHTML = data.highlights
        .map(
          (hl) =>
            `<div class="border border-white/5 rounded-lg p-2.5 flex flex-col items-center justify-center text-center gap-1.5 bg-white/5">
              <span class="material-symbols-outlined text-primary text-3xl">${hl.icon}</span>
              <span class="text-white font-bold text-[11px] leading-tight mt-1">${hl.text}</span>
            </div>`,
        )
        .join("");
    }

    if (modalProjectGallery) {
      currentGalleryImages = data.images;
      currentGalleryIndex = 0;
      updateGallery();
      resetGalleryInterval();
    }

    projectDetailsModal.classList.remove("opacity-0", "pointer-events-none");
    projectModalContent.classList.remove("scale-95");
    projectModalContent.classList.add("scale-100");
    document.body.style.overflow = "hidden";
  };

  window.closeProjectModal = function () {
    if (!projectDetailsModal) return;
    projectDetailsModal.classList.add("opacity-0", "pointer-events-none");
    projectModalContent.classList.remove("scale-100");
    projectModalContent.classList.add("scale-95");
    document.body.style.overflow = "";
    clearInterval(galleryInterval);
  };

  /*------------------- Lógica de Galería (Carrusel) ------------------*/
  let currentGalleryImages = [];
  let currentGalleryIndex = 0;
  let galleryInterval = null;

  function updateGallery() {
    if (!modalProjectGallery || currentGalleryImages.length === 0) return;

    modalProjectGallery.innerHTML = `<img src="${currentGalleryImages[currentGalleryIndex]}" alt="Vista" class="absolute inset-0 w-full h-full object-cover animate-fadeIn">
      <div class="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-0 hover:opacity-100 transition-opacity duration-500"></div>`;

    const dotsContainer = document.getElementById("gallery-dots");
    if (dotsContainer) {
      dotsContainer.innerHTML = currentGalleryImages
        .map(
          (_, i) =>
            `<button class="w-2 h-2 rounded-full transition-colors ${i === currentGalleryIndex ? "bg-primary" : "bg-white/20"}" onclick="setGalleryIndex(${i})"></button>`,
        )
        .join("");
    }
  }

  window.setGalleryIndex = function (i) {
    currentGalleryIndex = i;
    updateGallery();
    resetGalleryInterval();
  };

  function nextGallery() {
    if (currentGalleryImages.length === 0) return;
    currentGalleryIndex =
      (currentGalleryIndex + 1) % currentGalleryImages.length;
    updateGallery();
  }

  function prevGallery() {
    if (currentGalleryImages.length === 0) return;
    currentGalleryIndex =
      (currentGalleryIndex - 1 + currentGalleryImages.length) %
      currentGalleryImages.length;
    updateGallery();
  }

  function resetGalleryInterval() {
    clearInterval(galleryInterval);
    if (currentGalleryImages.length > 1) {
      galleryInterval = setInterval(nextGallery, 3000);
    }
  }

  const galleryNextBtn = document.getElementById("gallery-next");
  const galleryPrevBtn = document.getElementById("gallery-prev");
  if (galleryNextBtn) {
    galleryNextBtn.addEventListener("click", () => {
      nextGallery();
      resetGalleryInterval();
    });
  }
  if (galleryPrevBtn) {
    galleryPrevBtn.addEventListener("click", () => {
      prevGallery();
      resetGalleryInterval();
    });
  }

  if (closeProjectModalBtn) {
    closeProjectModalBtn.addEventListener("click", window.closeProjectModal);
  }

  if (projectDetailsModal) {
    projectDetailsModal.addEventListener("click", function (e) {
      if (e.target === projectDetailsModal) window.closeProjectModal();
    });
  }
});

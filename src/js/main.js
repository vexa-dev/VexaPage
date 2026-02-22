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
            updateProgressLine();
          }
        });
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
});

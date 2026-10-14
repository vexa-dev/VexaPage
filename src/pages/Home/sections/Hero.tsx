import { useIntro } from "@/context/IntroContext";
import GradientWaves from "@/components/backgrounds/GradientWaves";
import MetallicPaint from "@/components/animations/MetallicPaint";
import { TextType } from "@/components/animations/TextType";
import SkewSweepButton from "@/components/animations/SkewSweepButton";
import { FlipFadeText } from "@/components/animations/FlipFadeText";

const TYPED_WORDS = ["Innovación", "Evolución", "Resultados", "Tecnología"];

export function Hero() {
  const { isIntroActive } = useIntro();

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden"
      id="inicio"
    >
      {/* Fondo interactivo de olas en gradiente con colores corporativos de VEXA */}
      <div className="absolute inset-0 -z-10 opacity-75 pointer-events-none">
        <GradientWaves
          horizonColor="#0A0C0E"
          waveColor="#548D7B"
          crestColor="#E2F1EC"
          speed={0.35}
          amplitude={2.2}
          waveScale={0.7}
          waveRatio={0.9}
          swell={30}
          turbulence={18}
          tilt={1.12}
          zoom={1.05}
          height={5.2}
          fogDepth={18}
          detail="medium"
          brightness={1.1}
          opacity={0.85}
          mouseInteraction={true}
          parallaxStrength={0.45}
        />
      </div>

      {/* Resplandor suave central corporativo para acentuar el logo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#548D7B]/10 blur-3xl rounded-full -z-10 pointer-events-none" />

      {/* Degradado inferior de ancho completo para fusión continua y sin cortes hacia la siguiente sección */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0C0E] via-[#0A0C0E]/70 to-transparent -z-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center w-full">
        <div
          id="hero-metallic-logo"
          style={isIntroActive ? { opacity: 0, visibility: "hidden" } : undefined}
          className="flex justify-center mb-10"
        >
          <div className="relative h-48 w-48 md:h-72 md:w-72 flex items-center justify-center">
            {/* Resplandor ambiental de fondo */}
            <div className="absolute inset-0 bg-[#498974]/15 rounded-full blur-2xl pointer-events-none" />

            {/* Logo de VEXA con efecto de metal líquido reflectivo y flujo continuo suave */}
            <MetallicPaint
              imageSrc="/img/vexa-symbol.svg"
              seed={42}
              scale={3.5}
              liquid={0.75}
              speed={0.25}
              brightness={1.85}
              contrast={0.6}
              patternSharpness={1.0}
              waveAmplitude={0.8}
              noiseScale={0.4}
              chromaticSpread={1.1}
              tintColor="#76A897"
              lightColor="#FFFFFF"
              darkColor="#0A0C0E"
              mouseAnimation={false}
              className="relative z-10 w-full h-full drop-shadow-[0_0_28px_rgba(84,141,123,0.28)]"
            />
          </div>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-extrabold mb-6 leading-tight max-w-4xl mx-auto text-slate-900 dark:text-white transition-colors duration-300">
          <div
            id="hero-headline-1"
            style={isIntroActive ? { opacity: 0, visibility: "hidden" } : undefined}
            className="inline-block"
          >
            VEXA:{" "}
            <TextType
              as="span"
              text={TYPED_WORDS}
              typingSpeed={60}
              pauseDuration={3000}
              deletingSpeed={70}
              showCursor={true}
              cursorCharacter="_"
              cursorBlinkDuration={0.5}
              className="bg-gradient-to-r from-[#8BB8A8] to-[#548D7B] bg-clip-text text-transparent"
              cursorClassName="text-[#76A897] font-bold ml-1"
            />
          </div>
          <br />
          <div
            id="hero-headline-2"
            style={isIntroActive ? { opacity: 0, visibility: "hidden" } : undefined}
            className="inline-block"
          >
            en Software a tu Medida
          </div>
        </h1>
        <p
          id="hero-description"
          style={isIntroActive ? { opacity: 0, visibility: "hidden" } : undefined}
          className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed transition-colors duration-300"
        >
          <FlipFadeText
            text="Especialistas en el desarrollo de experiencias web premium, aplicaciones móviles de alto rendimiento y sistemas robustos de gestión de inventarios para impulsar tu crecimiento."
            className="inline-flex flex-wrap items-center justify-center text-center leading-relaxed"
            staggerDelay={0.007}
            letterDuration={0.35}
            delay={0.2}
          />
        </p>
        <div
          id="hero-actions"
          style={isIntroActive ? { opacity: 0, visibility: "hidden" } : undefined}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <SkewSweepButton
            href="#contacto"
            className="bg-[#498974] text-white font-bold hover:bg-[#3B705F] shadow-[0_6px_20px_rgba(73,137,116,0.22)]"
          >
            Solicitar Cotización
          </SkewSweepButton>
          <a
            className="w-full sm:w-auto px-8 py-4 bg-[#111518]/80 backdrop-blur-md hover:bg-[#161B20] text-white hover:text-[#76A897] font-bold rounded-xl transition-all border border-white/10 hover:border-white/20"
            href="#servicios"
          >
            Explorar Servicios
          </a>
        </div>
      </div>
    </section>
  );
}

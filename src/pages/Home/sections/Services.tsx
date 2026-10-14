import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FlipFadeText } from "@/components/animations/FlipFadeText";

gsap.registerPlugin(ScrollTrigger);

interface ServiceItem {
  id: string;
  number: string;
  badge?: string;
  title: string;
  description: string;
  tags: string[];
}

const services: ServiceItem[] = [
  {
    id: "consultoria",
    number: "01",
    badge: "GRATUITO PARA CUALQUIER SERVICIO",
    title: "Consultoría en Transformación Digital",
    description:
      "Te ayudamos a entender qué software necesitas para hacer crecer tu negocio. Te guiamos en el proceso estratégico para asegurar que la tecnología sea una inversión rentable y no un gasto.",
    tags: ["Estrategia", "Análisis", "Innovación"],
  },
  {
    id: "web",
    number: "02",
    title: "Desarrollo de Páginas Web",
    description:
      "Creamos experiencias digitales atractivas y funcionales con la mejor tecnología. Landing pages, portafolios interactivos y sitios corporativos optimizados para una máxima conversión.",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    id: "mobile",
    number: "03",
    title: "Desarrollo de Apps Móviles",
    description:
      "Llevamos tu modelo de negocio directo al bolsillo de tus clientes. Aplicaciones nativas e híbridas para iOS y Android con rendimiento superior y animaciones fluidas.",
    tags: ["React Native", "Swift / Kotlin", "Firebase"],
  },
  {
    id: "inventario",
    number: "04",
    title: "Sistema de Gestión de Inventario",
    description:
      "Optimiza el control de tus productos y recursos. Desarrollamos plataformas robustas y personalizadas que te brindan una visibilidad completa de tu stock y transacciones en tiempo real.",
    tags: ["Java", "React", "REST APIs"],
  },
  {
    id: "personal",
    number: "05",
    title: "Sistema de Gestión de Personal",
    description:
      "Automatiza y centraliza la administración de tus equipos. Soluciones eficientes para control de asistencias, planillas, perfiles profesionales y evaluación de métricas corporativas.",
    tags: ["Dashboards", "SpringBoot", "MySQL"],
  },
];

/* -------------------------------------------------------------------------- */
/*                  Vistas de Visualización para Columna Derecha              */
/* -------------------------------------------------------------------------- */

function ConsultoriaVisual() {
  return (
    <div className="w-full h-full min-h-[300px] max-h-[380px] bg-[#111518]/80 border border-white/10 hover:border-white/20 rounded-2xl p-4 sm:p-5 flex flex-col justify-between backdrop-blur-md shadow-2xl relative overflow-hidden">
      {/* Luz perimetral sutil corporativa */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#498974]/12 rounded-full blur-3xl pointer-events-none" />

      {/* Barra de cabecera de ventana */}
      <div className="flex items-center justify-between pb-3 border-b border-white/5 relative z-10">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#548D7B]/80" />
          </div>
          <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 pl-2 tracking-wider">
            VEXA ADVISORY // DIAGNÓSTICO ESTRATÉGICO
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#4A788A]/15 border border-[#4A788A]/30 text-[#88B0C0] text-[10px] font-mono font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#548D7B] animate-pulse" />
          AUDITORÍA ACTIVA
        </div>
      </div>

      {/* Métricas clave - Cards hijas diferenciadas (Petróleo, Verde VEXA, Acero) */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 my-auto relative z-10">
        <div className="bg-[#161B20]/80 border border-[#4A788A]/30 rounded-xl p-2.5 sm:p-3 flex flex-col justify-between">
          <span className="text-[10px] text-[#88B0C0] font-medium">Factibilidad</span>
          <div className="mt-1">
            <span className="text-lg sm:text-2xl font-bold font-mono text-white">98.5%</span>
          </div>
          <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
            <div className="bg-[#4A788A] h-full w-[98.5%] rounded-full" />
          </div>
        </div>

        <div className="bg-[#161B20]/80 border border-[#548D7B]/35 rounded-xl p-2.5 sm:p-3 flex flex-col justify-between">
          <span className="text-[10px] text-slate-400 font-medium">Retorno (ROI)</span>
          <div className="mt-1">
            <span className="text-lg sm:text-2xl font-bold font-mono text-[#76A897]">+320%</span>
          </div>
          <span className="text-[9px] text-[#76A897]/80 font-mono mt-1">3.2x Proyectado</span>
        </div>

        <div className="bg-[#161B20]/80 border border-white/10 rounded-xl p-2.5 sm:p-3 flex flex-col justify-between">
          <span className="text-[10px] text-slate-300 font-medium">Gasto Innecesario</span>
          <div className="mt-1">
            <span className="text-lg sm:text-2xl font-bold font-mono text-slate-200">-45%</span>
          </div>
          <span className="text-[9px] text-slate-400 font-mono mt-1">Optimización Op.</span>
        </div>
      </div>

      {/* Roadmap de acompañamiento - Stepper corporativo */}
      <div className="bg-[#0A0C0E]/60 border border-white/10 rounded-xl p-3 relative z-10">
        <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
          <span>Ruta de Acompañamiento</span>
          <span className="text-[#76A897] font-semibold">100% Sin Costo Previo</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center text-[10px] sm:text-[11px]">
          <div className="p-2 rounded-lg bg-[#498974]/20 border border-[#548D7B]/40 text-[#8BB8A8] font-medium flex items-center justify-center gap-1.5">
            <span className="material-symbols-outlined text-xs text-[#76A897]">check_circle</span>
            <span>1. Diagnóstico</span>
          </div>
          <div className="p-2 rounded-lg bg-[#4A788A]/15 border border-[#4A788A]/30 text-[#88B0C0] font-medium flex items-center justify-center gap-1.5">
            <span className="material-symbols-outlined text-xs text-[#88B0C0]">architecture</span>
            <span>2. Arquitectura</span>
          </div>
          <div className="p-2 rounded-lg bg-white/[0.02] border border-white/10 text-slate-400 font-medium flex items-center justify-center gap-1.5">
            <span className="material-symbols-outlined text-xs text-slate-500">rocket_launch</span>
            <span>3. Escala</span>
          </div>
        </div>
      </div>

      {/* Pie de terminal */}
      <div className="pt-2 text-[10px] sm:text-[11px] font-mono text-slate-400 flex items-center gap-2 relative z-10 border-t border-white/5">
        <span className="text-[#76A897] font-bold">{">"}</span>
        <span className="truncate">Estrategia validada: Evitamos sobrecostos eligiendo la tecnología precisa.</span>
      </div>
    </div>
  );
}

function WebVisual() {
  return (
    <div className="w-full h-full min-h-[300px] max-h-[380px] bg-[#111518]/80 border border-white/10 hover:border-white/20 rounded-2xl p-4 sm:p-5 flex flex-col justify-between backdrop-blur-md shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#4A788A]/12 rounded-full blur-3xl pointer-events-none" />

      {/* Barra de navegador */}
      <div className="flex items-center gap-3 pb-3 border-b border-white/5 relative z-10">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#548D7B]/80" />
        </div>
        <div className="flex-1 bg-[#0A0C0E]/70 border border-white/10 rounded-lg px-3 py-1 text-[11px] font-mono text-slate-300 flex items-center justify-between">
          <div className="flex items-center gap-1.5 truncate">
            <span className="material-symbols-outlined text-xs text-[#76A897]">lock</span>
            <span className="text-slate-400">https://</span>
            <span className="text-white font-medium">tu-negocio.vexa.space</span>
          </div>
          <span className="text-[10px] text-[#76A897] bg-[#498974]/15 px-1.5 py-0.2 rounded font-mono hidden sm:inline">200 OK</span>
        </div>
      </div>

      {/* Miniatura visual del portal */}
      <div className="my-auto bg-[#0A0C0E]/60 border border-white/10 rounded-xl p-3 sm:p-3.5 relative z-10 flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-[#498974]/20 border border-[#548D7B]/40 flex items-center justify-center font-bold text-[10px] text-[#8BB8A8]">V</div>
            <div className="w-16 h-2 bg-white/20 rounded" />
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-2 bg-white/10 rounded" />
            <div className="w-8 h-2 bg-white/10 rounded" />
            <div className="w-10 h-3.5 bg-[#498974]/80 rounded" />
          </div>
        </div>

        {/* Hero banner preview */}
        <div className="bg-gradient-to-r from-[#498974]/15 via-[#4A788A]/10 to-transparent border border-[#548D7B]/25 rounded-lg p-2.5 flex items-center justify-between">
          <div>
            <div className="w-28 sm:w-36 h-2 bg-white rounded mb-1.5" />
            <div className="w-20 sm:w-24 h-1.5 bg-slate-400 rounded" />
          </div>
          <div className="px-2 py-0.5 bg-[#498974] text-white text-[9px] sm:text-[10px] font-bold rounded shadow-sm">
            CONVERSIÓN +180%
          </div>
        </div>

        {/* Métricas Lighthouse Core Web Vitals diferenciadas */}
        <div className="grid grid-cols-4 gap-1.5 sm:gap-2 pt-1">
          {[
            { label: "Performance", val: "100", border: "border-[#548D7B]/35", text: "text-[#76A897]", bg: "bg-[#498974]/12" },
            { label: "Accessibility", val: "100", border: "border-[#4A788A]/35", text: "text-[#88B0C0]", bg: "bg-[#4A788A]/12" },
            { label: "Best Practices", val: "100", border: "border-white/15", text: "text-slate-200", bg: "bg-[#161B20]/80" },
            { label: "SEO", val: "100", border: "border-[#548D7B]/35", text: "text-[#76A897]", bg: "bg-[#498974]/12" },
          ].map((m) => (
            <div key={m.label} className={`${m.bg} border ${m.border} rounded-lg p-1.5 text-center`}>
              <span className={`block text-xs sm:text-sm font-bold font-mono ${m.text}`}>{m.val}</span>
              <span className="text-[8px] sm:text-[9px] text-slate-400 font-sans truncate block">{m.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pie con especificaciones técnicas */}
      <div className="pt-2 text-[10px] sm:text-[11px] font-mono text-slate-400 flex items-center justify-between relative z-10 border-t border-white/5">
        <span className="flex items-center gap-1.5 truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-[#548D7B]" />
          Next.js App Router • React 19 • Tailwind CSS
        </span>
        <span className="text-[#88B0C0] font-semibold pl-2">TTFB: 42ms</span>
      </div>
    </div>
  );
}

function MobileVisual() {
  return (
    <div className="w-full h-full min-h-[300px] max-h-[380px] bg-[#111518]/80 border border-white/10 hover:border-white/20 rounded-2xl p-4 sm:p-5 flex items-center justify-center backdrop-blur-md shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#498974]/12 rounded-full blur-3xl pointer-events-none" />

      {/* Indicadores laterales técnicos diferenciados */}
      <div className="hidden sm:flex flex-col gap-2.5 mr-5 relative z-10 text-left">
        <div className="p-2 rounded-xl bg-[#161B20]/80 border border-[#4A788A]/30">
          <span className="text-[9px] font-mono text-[#88B0C0] block">NATIVE ENGINE</span>
          <span className="text-[11px] font-bold text-white flex items-center gap-1 mt-0.5">
            <span className="material-symbols-outlined text-xs text-[#88B0C0]">smartphone</span>
            iOS & Android
          </span>
        </div>
        <div className="p-2 rounded-xl bg-[#161B20]/80 border border-[#548D7B]/35">
          <span className="text-[9px] font-mono text-slate-400 block">RENDIMIENTO</span>
          <span className="text-[11px] font-bold text-[#76A897] flex items-center gap-1 mt-0.5">
            <span className="material-symbols-outlined text-xs">speed</span>
            60 FPS Fluidos
          </span>
        </div>
        <div className="p-2 rounded-xl bg-[#161B20]/80 border border-white/10">
          <span className="text-[9px] font-mono text-slate-300 block">OFFLINE FIRST</span>
          <span className="text-[11px] font-bold text-white flex items-center gap-1 mt-0.5">
            <span className="material-symbols-outlined text-xs text-[#76A897]">cloud_done</span>
            Sync en Tiempo Real
          </span>
        </div>
      </div>

      {/* Dispositivo móvil central */}
      <div className="w-[180px] sm:w-[200px] h-[270px] sm:h-[300px] rounded-[28px] border-2 border-white/15 bg-[#0A0C0E] p-3 shadow-2xl relative overflow-hidden flex flex-col justify-between z-10">
        {/* Dynamic Island */}
        <div className="w-14 h-3 bg-black rounded-full mx-auto border border-white/10 flex items-center justify-end px-1.5">
          <span className="w-1 h-1 rounded-full bg-[#548D7B] animate-pulse" />
        </div>

        {/* Panel de balance */}
        <div className="mt-2 bg-gradient-to-br from-[#498974]/20 via-[#4A788A]/10 to-transparent border border-[#548D7B]/30 rounded-xl p-2.5">
          <span className="text-[8px] font-mono text-slate-300">BALANCE COMERCIAL</span>
          <div className="text-sm sm:text-base font-bold font-mono text-white mt-0.5">$38,420.00</div>
          {/* Gráfico vectorial dinámico */}
          <div className="mt-1 h-5 flex items-end">
            <svg viewBox="0 0 100 25" className="w-full h-full text-[#76A897]" fill="none">
              <path
                d="M0 20 Q 25 5, 50 15 T 100 3"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Acciones directas */}
        <div className="grid grid-cols-3 gap-1 my-1">
          {["Pagar", "Transferir", "Métricas"].map((act) => (
            <div key={act} className="bg-white/5 border border-white/10 rounded-md py-1 text-center text-[8px] font-medium text-slate-300">
              {act}
            </div>
          ))}
        </div>

        {/* Notificación flotante en tiempo real */}
        <div className="bg-[#111518] border border-white/10 rounded-lg p-1.5 flex items-center gap-1.5 shadow-lg">
          <span className="material-symbols-outlined text-xs text-[#76A897]">notifications_active</span>
          <span className="text-[8px] text-slate-300 truncate">Orden sincronizada en vivo</span>
        </div>

        {/* Indicador inferior */}
        <div className="w-12 h-1 bg-white/30 rounded-full mx-auto" />
      </div>
    </div>
  );
}

function InventarioVisual() {
  return (
    <div className="w-full h-full min-h-[300px] max-h-[380px] bg-[#111518]/80 border border-white/10 hover:border-white/20 rounded-2xl p-4 sm:p-5 flex flex-col justify-between backdrop-blur-md shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#4A788A]/12 rounded-full blur-3xl pointer-events-none" />

      {/* Cabecera */}
      <div className="flex items-center justify-between pb-3 border-b border-white/5 relative z-10">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#76A897] text-base">inventory_2</span>
          <span className="text-[10px] sm:text-[11px] font-mono text-slate-300 tracking-wider">
            VEXA WMS // CONTROL DE STOCK EN TIEMPO REAL
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#4A788A]/15 border border-[#4A788A]/30 text-[#88B0C0] text-[10px] font-mono font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#548D7B] animate-pulse" />
          REST APIs: 18ms
        </div>
      </div>

      {/* KPIs de Inventario diferenciados */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 my-auto relative z-10">
        <div className="bg-[#161B20]/80 border border-[#4A788A]/30 rounded-xl p-2.5 sm:p-3">
          <span className="text-[10px] text-slate-400 font-medium">Stock Total</span>
          <div className="text-base sm:text-2xl font-bold font-mono text-white mt-1">18,450</div>
          <span className="text-[9px] text-[#88B0C0] font-mono">100% Auditado</span>
        </div>
        <div className="bg-[#161B20]/80 border border-white/10 rounded-xl p-2.5 sm:p-3">
          <span className="text-[10px] text-slate-400 font-medium">SKUs Activos</span>
          <div className="text-base sm:text-2xl font-bold font-mono text-white mt-1">2,140</div>
          <span className="text-[9px] text-slate-300 font-mono">Kardex Automático</span>
        </div>
        <div className="bg-[#161B20]/80 border border-[#548D7B]/35 rounded-xl p-2.5 sm:p-3">
          <span className="text-[10px] text-slate-400 font-medium">Quiebres</span>
          <div className="text-base sm:text-2xl font-bold font-mono text-[#76A897] mt-1">0</div>
          <span className="text-[9px] text-slate-400 font-mono">Alertas Tempranas</span>
        </div>
      </div>

      {/* Estado de almacenes */}
      <div className="bg-[#0A0C0E]/60 border border-white/10 rounded-xl p-2.5 sm:p-3 relative z-10 space-y-2">
        <div>
          <div className="flex justify-between text-[10px] font-mono text-slate-300 mb-1">
            <span>Almacén Central (Sede Principal)</span>
            <span className="text-[#76A897] font-semibold">88% Capacidad</span>
          </div>
          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#548D7B] h-full w-[88%] rounded-full" />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[10px] font-mono text-slate-300 mb-1">
            <span>Centro de Distribución Regional</span>
            <span className="text-[#88B0C0] font-semibold">64% Capacidad</span>
          </div>
          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#4A788A] h-full w-[64%] rounded-full" />
          </div>
        </div>
      </div>

      {/* Terminal de estado */}
      <div className="pt-2 text-[10px] sm:text-[11px] font-mono text-slate-400 flex items-center gap-2 relative z-10 border-t border-white/5">
        <span className="text-[#548D7B] font-bold">●</span>
        <span className="truncate">Escaneo RFID & código de barras sincronizado con backend Java y base de datos SQL.</span>
      </div>
    </div>
  );
}

function PersonalVisual() {
  return (
    <div className="w-full h-full min-h-[300px] max-h-[380px] bg-[#111518]/80 border border-white/10 hover:border-white/20 rounded-2xl p-4 sm:p-5 flex flex-col justify-between backdrop-blur-md shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#498974]/12 rounded-full blur-3xl pointer-events-none" />

      {/* Cabecera */}
      <div className="flex items-center justify-between pb-3 border-b border-white/5 relative z-10">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#88B0C0] text-base">groups</span>
          <span className="text-[10px] sm:text-[11px] font-mono text-slate-300 tracking-wider">
            VEXA HR & TALENT // GESTIÓN DE PLANILLAS Y EQUIPOS
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#4A788A]/15 border border-[#4A788A]/30 text-[#88B0C0] text-[10px] font-mono font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#548D7B] animate-pulse" />
          PLANILLA AL DÍA
        </div>
      </div>

      {/* KPIs de Personal diferenciados */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 my-auto relative z-10">
        <div className="bg-[#161B20]/80 border border-[#548D7B]/35 rounded-xl p-2.5 sm:p-3">
          <span className="text-[10px] text-slate-400 font-medium">Asistencia Hoy</span>
          <div className="text-base sm:text-2xl font-bold font-mono text-[#76A897] mt-1">98.8%</div>
          <span className="text-[9px] text-slate-400 font-mono">Biométrico y GPS</span>
        </div>
        <div className="bg-[#161B20]/80 border border-[#4A788A]/30 rounded-xl p-2.5 sm:p-3">
          <span className="text-[10px] text-slate-400 font-medium">Colaboradores</span>
          <div className="text-base sm:text-2xl font-bold font-mono text-white mt-1">142</div>
          <span className="text-[9px] text-[#88B0C0] font-mono">Perfiles Activos</span>
        </div>
        <div className="bg-[#161B20]/80 border border-white/10 rounded-xl p-2.5 sm:p-3">
          <span className="text-[10px] text-slate-400 font-medium">Cálculo Nómina</span>
          <div className="text-base sm:text-2xl font-bold font-mono text-white mt-1">0 Errores</div>
          <span className="text-[9px] text-slate-300 font-mono">Automatizado 100%</span>
        </div>
      </div>

      {/* Vista de colaboradores */}
      <div className="bg-[#0A0C0E]/60 border border-white/10 rounded-xl p-2.5 relative z-10 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#4A788A]/20 border border-[#4A788A]/40 flex items-center justify-center font-bold text-[10px] text-[#88B0C0]">
              JP
            </div>
            <div>
              <div className="text-white font-medium text-[10px] sm:text-[11px]">Ingeniería de Software Senior</div>
              <div className="text-[9px] text-slate-400">Desarrollo Core • Remoto</div>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#498974]/15 border border-[#548D7B]/30 text-[#76A897] text-[9px] sm:text-[10px] font-mono">
            En Jornada
          </span>
        </div>

        <div className="flex items-center justify-between text-xs border-t border-white/5 pt-1.5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-[10px] text-slate-300">
              MR
            </div>
            <div>
              <div className="text-white font-medium text-[10px] sm:text-[11px]">Liderazgo Operativo & RRHH</div>
              <div className="text-[9px] text-slate-400">Administración • Sede Central</div>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#498974]/15 border border-[#548D7B]/30 text-[#76A897] text-[9px] sm:text-[10px] font-mono">
            En Jornada
          </span>
        </div>
      </div>

      {/* Pie técnico */}
      <div className="pt-2 text-[10px] sm:text-[11px] font-mono text-slate-400 flex items-center justify-between relative z-10 border-t border-white/5">
        <span className="flex items-center gap-1.5 truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-[#548D7B]" />
          Arquitectura SpringBoot + MySQL Encriptado
        </span>
        <span className="text-[#88B0C0] pl-2">Dashboards React</span>
      </div>
    </div>
  );
}

function getServiceVisual(id: string) {
  switch (id) {
    case "consultoria":
      return <ConsultoriaVisual />;
    case "web":
      return <WebVisual />;
    case "mobile":
      return <MobileVisual />;
    case "inventario":
      return <InventarioVisual />;
    case "personal":
      return <PersonalVisual />;
    default:
      return null;
  }
}

/* -------------------------------------------------------------------------- */
/*                         Componente Principal Services                      */
/* -------------------------------------------------------------------------- */

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[index] = el;
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Usamos gsap.context() con scope en sectionRef para garantizar limpieza perfecta en React 19
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
        const dots = dotsRef.current;
        if (cards.length < 5) return;

        // Estado inicial desktop: Tarjeta 0 oculta abajo esperando su turno del scroll
        gsap.set(cards[0], {
          y: 70,
          scale: 0.94,
          opacity: 0,
          filter: "brightness(1)",
          zIndex: 10,
          transformOrigin: "center top",
        });

        if (dots) {
          gsap.set(dots, { opacity: 0, y: 15 });
        }

        cards.slice(1).forEach((card, idx) => {
          gsap.set(card, {
            y: "115%",
            scale: 1,
            opacity: 1,
            filter: "brightness(1)",
            zIndex: 20 + idx * 10,
            transformOrigin: "center top",
          });
        });

        // Timeline con ScrollTrigger fijando la sección durante la secuencia
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=3500",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const p = self.progress;
              let step = 0;
              if (p > 0.88) step = 4;
              else if (p > 0.69) step = 3;
              else if (p > 0.50) step = 2;
              else if (p > 0.30) step = 1;
              else step = 0;
              setActiveCardIndex(step);
            },
          },
        });

        // FASE 0: Cuando llega su turno del scroll, la primera tarjeta APARECE suavemente
        tl.to(cards[0], {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
        });

        if (dots) {
          tl.to(
            dots,
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
            },
            "<0.2",
          );
        }

        // Pausa de lectura para la Tarjeta 1
        tl.to({}, { duration: 0.8 });

        // PASO 1: Tarjeta 1 sube y cubre a Tarjeta 0. Tarjeta 0 se contrae en 3D
        tl.to(cards[0], {
          scale: 0.93,
          y: -22,
          filter: "brightness(0.65)",
          ease: "power1.inOut",
          duration: 1.2,
        })
          .to(
            cards[1],
            {
              y: "0%",
              scale: 1,
              filter: "brightness(1)",
              ease: "power1.inOut",
              duration: 1.2,
            },
            "<",
          )
          .to({}, { duration: 0.8 }); // Pausa de lectura

        // PASO 2: Tarjeta 2 sube y cubre a Tarjeta 1. Tarjetas 0 y 1 se contraen progresivamente
        tl.to(cards[0], {
          scale: 0.86,
          y: -42,
          filter: "brightness(0.35)",
          ease: "power1.inOut",
          duration: 1.2,
        })
          .to(
            cards[1],
            {
              scale: 0.93,
              y: -22,
              filter: "brightness(0.65)",
              ease: "power1.inOut",
              duration: 1.2,
            },
            "<",
          )
          .to(
            cards[2],
            {
              y: "0%",
              scale: 1,
              filter: "brightness(1)",
              ease: "power1.inOut",
              duration: 1.2,
            },
            "<",
          )
          .to({}, { duration: 0.8 });

        // PASO 3: Tarjeta 3 sube y cubre a Tarjeta 2.
        tl.to(cards[0], {
          scale: 0.8,
          y: -60,
          filter: "brightness(0.18)",
          ease: "power1.inOut",
          duration: 1.2,
        })
          .to(
            cards[1],
            {
              scale: 0.86,
              y: -42,
              filter: "brightness(0.35)",
              ease: "power1.inOut",
              duration: 1.2,
            },
            "<",
          )
          .to(
            cards[2],
            {
              scale: 0.93,
              y: -22,
              filter: "brightness(0.65)",
              ease: "power1.inOut",
              duration: 1.2,
            },
            "<",
          )
          .to(
            cards[3],
            {
              y: "0%",
              scale: 1,
              filter: "brightness(1)",
              ease: "power1.inOut",
              duration: 1.2,
            },
            "<",
          )
          .to({}, { duration: 0.8 });

        // PASO 4: Tarjeta 4 sube y cubre a Tarjeta 3.
        tl.to(cards[0], {
          scale: 0.75,
          y: -76,
          filter: "brightness(0.08)",
          ease: "power1.inOut",
          duration: 1.2,
        })
          .to(
            cards[1],
            {
              scale: 0.8,
              y: -60,
              filter: "brightness(0.18)",
              ease: "power1.inOut",
              duration: 1.2,
            },
            "<",
          )
          .to(
            cards[2],
            {
              scale: 0.86,
              y: -42,
              filter: "brightness(0.35)",
              ease: "power1.inOut",
              duration: 1.2,
            },
            "<",
          )
          .to(
            cards[3],
            {
              scale: 0.93,
              y: -22,
              filter: "brightness(0.65)",
              ease: "power1.inOut",
              duration: 1.2,
            },
            "<",
          )
          .to(
            cards[4],
            {
              y: "0%",
              scale: 1,
              filter: "brightness(1)",
              ease: "power1.inOut",
              duration: 1.2,
            },
            "<",
          )
          .to({}, { duration: 0.8 });
      });

      // MÓVIL (< 1024px): Cada tarjeta entra con animación al alcanzar su turno de scroll
      mm.add("(max-width: 1023px)", () => {
        const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 50,
              scale: 0.95,
            },
            {
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                toggleActions: "play none none none",
              },
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.9,
              ease: "power2.out",
            },
          );
        });
      });
    }, section);

    return () => {
      // Limpieza total y segura de ScrollTrigger y pin spacers
      ctx.revert();
    };
  }, []);

  const handleDotClick = (index: number) => {
    const trigger = ScrollTrigger.getAll().find((st) => st.trigger === sectionRef.current);
    if (!trigger || typeof trigger.start !== "number" || typeof trigger.end !== "number") return;
    const distance = trigger.end - trigger.start;
    const progressSteps = [0.16, 0.38, 0.6, 0.8, 0.98];
    const targetProgress = progressSteps[index] ?? index / 4;
    const targetScroll = trigger.start + distance * targetProgress;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="relative isolate py-14 lg:py-16 overflow-hidden bg-[#0A0C0E] min-h-screen flex flex-col justify-center"
    >
      {/* Luces y texturas ambientales de fondo (Verde Corporativo + Azul Petróleo) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#498974]/[0.08] rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#4A788A]/[0.06] rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center">
        {/* Encabezado General Centrado */}
        <div className="text-center mb-6 lg:mb-8 relative z-10 max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
            <FlipFadeText text="Nuestros" />
            <br />
            <FlipFadeText
              text="Servicios Estrella"
              textClassName="text-[#76A897] font-display"
              delay={0.15}
            />
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            <FlipFadeText
              text="Descubre cómo podemos potenciar tu negocio a través de nuestras soluciones tecnológicas a medida, diseñadas para escalar y optimizar tus recursos."
              className="inline-flex flex-wrap items-center justify-center text-center leading-relaxed"
              staggerDelay={0.008}
              letterDuration={0.35}
              delay={0.15}
            />
          </p>

          {/* Indicador de progreso de tarjetas (Desktop) */}
          <div ref={dotsRef} className="hidden lg:flex items-center justify-center gap-2 mt-5">
            {services.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleDotClick(idx)}
                className={`transition-all duration-300 rounded-full h-1.5 ${
                  activeCardIndex === idx
                    ? "w-8 bg-[#548D7B] shadow-[0_0_10px_rgba(84,141,123,0.45)]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Ver servicio ${item.title}`}
              />
            ))}
          </div>
        </div>

        {/* Contenedor de Tarjetas Apilables (Stacking Cards) */}
        <div
          ref={cardsWrapperRef}
          className="relative w-full max-w-6xl mx-auto lg:h-[480px] xl:h-[500px] flex flex-col gap-8 lg:gap-0"
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={setCardRef(index)}
              style={{ zIndex: (index + 1) * 10 }}
              className="sticky top-24 lg:top-auto lg:absolute lg:inset-0 w-full h-[500px] lg:h-full bg-[#111518] border border-white/10 hover:border-white/20 rounded-3xl p-6 sm:p-8 md:p-9 lg:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] relative overflow-hidden flex flex-col justify-between"
            >
              {/* Halos ambientales internos de la tarjeta */}
              <div className="pointer-events-none absolute -top-32 -right-32 w-80 h-80 bg-[#498974]/10 rounded-full blur-3xl" />
              <div className="pointer-events-none absolute -bottom-32 -left-32 w-72 h-72 bg-[#4A788A]/[0.06] rounded-full blur-3xl" />

              {/* Distribución en 2 Columnas */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center h-full relative z-10">
                {/* Columna Izquierda: Información del Servicio */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full py-2">
                  <div>
                    {/* Fila superior: Número sutil y Badge si aplica */}
                    <div className="flex items-center gap-3 flex-wrap mb-3">
                      <span className="font-mono text-xs sm:text-sm tracking-widest text-[#88B0C0] uppercase font-semibold">
                        SERVICIO {service.number}
                      </span>
                      {service.badge && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4A788A]/15 border border-[#4A788A]/30 text-[#88B0C0] text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#548D7B] animate-pulse" />
                          {service.badge}
                        </span>
                      )}
                    </div>

                    {/* Título sobrio */}
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
                      {service.title}
                    </h3>

                    {/* Descripción limpia */}
                    <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Fila inferior: Tags en píldoras (Acero Ejecutivo) y enlace secundario */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2 mb-5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-[#181E24] text-slate-300 border border-white/10 shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contacto"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#76A897] hover:text-[#98C4B5] transition-colors group"
                    >
                      <span>Cotizar este servicio</span>
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>

                {/* Columna Derecha: Marco de Ventana / Dashboard Glassmorphism */}
                <div className="lg:col-span-7 h-full flex items-center justify-center">
                  {getServiceVisual(service.id)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

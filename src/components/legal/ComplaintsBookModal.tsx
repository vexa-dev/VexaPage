import { useState, useEffect, useId, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SITE } from "@/data/site";
import { useComplaintsModal } from "@/context/ComplaintsModalContext";

type DocumentType = "DNI" | "CE" | "PASAPORTE" | "RUC";
type ContractedType = "servicio" | "producto";
type ClaimType = "reclamo" | "queja";

interface SubmittedClaim {
  code: string;
  date: string;
  time: string;
  maxResponseDate: string;
  fullName: string;
  docType: DocumentType;
  docNumber: string;
  phone: string;
  email: string;
  address: string;
  district: string;
  isMinor: boolean;
  parentName?: string;
  parentDocNumber?: string;
  contractedType: ContractedType;
  currency: "PEN" | "USD";
  amountClaimed: string;
  contractedDescription: string;
  claimType: ClaimType;
  claimDetails: string;
  consumerRequest: string;
}

export function ComplaintsBookModal() {
  const { isOpen, closeComplaintsModal } = useComplaintsModal();
  const idPrefix = useId();

  // Form State
  const [fullName, setFullName] = useState("");
  const [docType, setDocType] = useState<DocumentType>("DNI");
  const [docNumber, setDocNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");

  const [isMinor, setIsMinor] = useState(false);
  const [parentName, setParentName] = useState("");
  const [parentDocNumber, setParentDocNumber] = useState("");

  const [contractedType, setContractedType] = useState<ContractedType>("servicio");
  const [currency, setCurrency] = useState<"PEN" | "USD">("PEN");
  const [amountClaimed, setAmountClaimed] = useState("");
  const [noAmount, setNoAmount] = useState(true);
  const [contractedDescription, setContractedDescription] = useState("");

  const [claimType, setClaimType] = useState<ClaimType>("reclamo");
  const [claimDetails, setClaimDetails] = useState("");
  const [consumerRequest, setConsumerRequest] = useState("");

  const [acceptTruth, setAcceptTruth] = useState(false);
  const [acceptPolicies, setAcceptPolicies] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<SubmittedClaim | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && !submitting) {
        closeComplaintsModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, submitting, closeComplaintsModal]);

  const resetForm = () => {
    setFullName("");
    setDocNumber("");
    setPhone("");
    setEmail("");
    setAddress("");
    setDistrict("");
    setIsMinor(false);
    setParentName("");
    setParentDocNumber("");
    setAmountClaimed("");
    setNoAmount(true);
    setContractedDescription("");
    setClaimDetails("");
    setConsumerRequest("");
    setAcceptTruth(false);
    setAcceptPolicies(false);
    setSubmittedData(null);
    setErrorMessage("");
  };

  const handleClose = () => {
    closeComplaintsModal();
    // Wait for exit transition before resetting data
    setTimeout(() => {
      resetForm();
    }, 300);
  };

  const calculateMaxResponseDate = () => {
    // 15 días hábiles corresponden aproximadamente a 21-23 días calendario
    const now = new Date();
    let count = 0;
    const current = new Date(now);
    while (count < 15) {
      current.setDate(current.getDate() + 1);
      const day = current.getDay();
      if (day !== 0 && day !== 6) {
        count++;
      }
    }
    return current.toLocaleDateString("es-PE", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!acceptTruth || !acceptPolicies) {
      setErrorMessage("Debes aceptar la declaración jurada y las políticas para enviar el registro.");
      return;
    }

    if (isMinor && (!parentName.trim() || !parentDocNumber.trim())) {
      setErrorMessage("Por favor ingresa los datos del padre/madre o apoderado para el menor de edad.");
      return;
    }

    setSubmitting(true);

    // Simulación de envío y persistencia con respuesta inmediata
    setTimeout(() => {
      const now = new Date();
      const year = now.getFullYear();
      const correlative = String(Math.floor(1000 + Math.random() * 9000));
      const code = `${claimType === "reclamo" ? "REC" : "QUE"}-${year}-${correlative}`;

      const dateStr = now.toLocaleDateString("es-PE", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });

      const timeStr = now.toLocaleTimeString("es-PE", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      const newClaim: SubmittedClaim = {
        code,
        date: dateStr,
        time: timeStr,
        maxResponseDate: calculateMaxResponseDate(),
        fullName,
        docType,
        docNumber,
        phone,
        email,
        address,
        district,
        isMinor,
        parentName: isMinor ? parentName : undefined,
        parentDocNumber: isMinor ? parentDocNumber : undefined,
        contractedType,
        currency,
        amountClaimed: noAmount ? "No especificado / No aplica" : `${currency === "PEN" ? "S/" : "$"} ${amountClaimed}`,
        contractedDescription,
        claimType,
        claimDetails,
        consumerRequest,
      };

      setSubmittedData(newClaim);
      setSubmitting(false);
    }, 600);
  };

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop con desenfoque de cristal prémium */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={handleClose}
          className="fixed inset-0 bg-[#04070a]/85 backdrop-blur-md"
        />

        {/* Contenedor del Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-[#0b0f14] border border-white/10 rounded-2xl md:rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(16,185,129,0.06)] overflow-hidden z-10"
        >
          {/* Cabecera del Modal */}
          <div className="px-5 sm:px-8 py-5 border-b border-white/10 bg-[#0d1218]/90 flex items-center justify-between gap-4 sticky top-0 z-20 backdrop-blur-md">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(16,185,129,0.15)] flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">menu_book</span>
              </div>
              <div>
                <h2 className="font-display text-lg sm:text-2xl font-bold text-white tracking-tight">
                  Libro de Reclamaciones
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Registra aquí tu queja o reclamo
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleClose}
              aria-label="Cerrar modal"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-all cursor-pointer flex-shrink-0"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          {/* Cuerpo con Scroll */}
          <div className="overflow-y-auto p-5 sm:p-8 space-y-8 flex-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {submittedData ? (
              /* ================= VISTA DE ÉXITO: HOJA DE RECLAMACIÓN GENERADA ================= */
              <div id="printable-complaint-sheet" className="space-y-6 animate-in fade-in duration-300">
                {/* Banner de confirmación */}
                <div className="p-5 rounded-2xl bg-primary/10 border border-primary/30 flex items-start sm:items-center gap-4 text-emerald-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-3xl">check_circle</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg text-white">
                      ¡Hoja de Reclamación Registrada con Éxito!
                    </h3>
                    <p className="text-sm text-slate-300 mt-0.5">
                      Se ha generado tu constancia oficial y se ha enviado una copia íntegra en formato digital a tu correo:{" "}
                      <span className="text-primary font-medium">{submittedData.email}</span>.
                    </p>
                  </div>
                </div>

                {/* Hoja de Reclamación Oficial Estilizada */}
                <div className="bg-[#0f141b] border border-white/15 rounded-2xl p-6 sm:p-8 space-y-6 text-slate-200 shadow-2xl relative overflow-hidden">
                  {/* Sello de agua sutil */}
                  <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none select-none font-display font-black text-8xl text-white">
                    VEXA
                  </div>

                  {/* Encabezado formal de la Hoja */}
                  <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-primary font-bold">
                        Hoja de Reclamación Virtual
                      </div>
                      <div className="font-mono text-2xl font-bold text-white mt-1 tracking-tight">
                        {submittedData.code}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        Fecha y Hora de Registro: <span className="text-slate-200">{submittedData.date} a las {submittedData.time}</span>
                      </div>
                    </div>

                    <div className="text-left md:text-right bg-white/5 border border-white/10 rounded-xl p-3 sm:px-4">
                      <div className="text-xs font-semibold text-white uppercase">{SITE.legal.businessName}</div>
                      <div className="text-xs text-slate-400 mt-0.5">RUC: {SITE.legal.ruc}</div>
                      <div className="text-xs text-slate-400">{SITE.legal.address}</div>
                      <div className="text-xs text-primary font-mono">{SITE.legal.email}</div>
                    </div>
                  </div>

                  {/* Resumen de Plazo Legal */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/[0.03] p-4 rounded-xl border border-white/5 text-xs">
                    <div>
                      <span className="text-slate-400 block">Tipo de Reclamación:</span>
                      <span className={`inline-block mt-1 font-bold px-2.5 py-1 rounded-md uppercase tracking-wider text-[11px] ${
                        submittedData.claimType === "reclamo"
                          ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                          : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                      }`}>
                        {submittedData.claimType === "reclamo" ? "Reclamo" : "Queja"}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Fecha límite legal de respuesta:</span>
                      <span className="text-white font-semibold block mt-1">
                        {submittedData.maxResponseDate} (15 días hábiles)
                      </span>
                    </div>
                  </div>

                  {/* Datos del Consumidor */}
                  <div className="space-y-3 border-t border-white/10 pt-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm">person</span>
                      1. Identificación del Consumidor Reclamante
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                      <div>
                        <span className="text-slate-400 block">Nombre Completo:</span>
                        <span className="text-white font-medium">{submittedData.fullName}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">{submittedData.docType}:</span>
                        <span className="text-white font-mono">{submittedData.docNumber}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Teléfono / Celular:</span>
                        <span className="text-white font-mono">{submittedData.phone}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Correo Electrónico:</span>
                        <span className="text-white">{submittedData.email}</span>
                      </div>
                      <div className="sm:col-span-2">
                        <span className="text-slate-400 block">Domicilio:</span>
                        <span className="text-white">{submittedData.address} {submittedData.district ? `(${submittedData.district})` : ""}</span>
                      </div>
                      {submittedData.isMinor && (
                        <div className="sm:col-span-3 bg-white/5 p-2.5 rounded-lg border border-white/10">
                          <span className="text-slate-400 block">Padre / Madre o Apoderado:</span>
                          <span className="text-white font-medium">{submittedData.parentName} - Doc: {submittedData.parentDocNumber}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bien Contratado */}
                  <div className="space-y-3 border-t border-white/10 pt-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm">inventory_2</span>
                      2. Identificación del Bien Contratado
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-slate-400 block">Tipo y Monto Reclamado:</span>
                        <span className="text-white font-medium capitalize">
                          {submittedData.contractedType} • {submittedData.amountClaimed}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Descripción del Bien/Servicio:</span>
                        <span className="text-white">{submittedData.contractedDescription}</span>
                      </div>
                    </div>
                  </div>

                  {/* Detalle y Pedido */}
                  <div className="space-y-3 border-t border-white/10 pt-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm">gavel</span>
                      3. Detalle de la Reclamación y Pedido
                    </h4>
                    <div className="space-y-3 text-xs">
                      <div className="bg-white/[0.02] p-3 rounded-xl border border-white/5">
                        <span className="text-slate-400 block mb-1">Detalle del Reclamo / Queja:</span>
                        <p className="text-white whitespace-pre-wrap leading-relaxed">{submittedData.claimDetails}</p>
                      </div>
                      <div className="bg-white/[0.02] p-3 rounded-xl border border-white/5">
                        <span className="text-slate-400 block mb-1">Pedido Concreto del Consumidor:</span>
                        <p className="text-white whitespace-pre-wrap leading-relaxed">{submittedData.consumerRequest}</p>
                      </div>
                    </div>
                  </div>

                  {/* Nota al pie de la constancia */}
                  <div className="border-t border-white/10 pt-4 text-[11px] text-slate-400 leading-relaxed space-y-1">
                    <p>
                      * Te responderemos en un plazo no mayor a 15 días hábiles a través del correo electrónico consignado.
                    </p>
                  </div>
                </div>

                {/* Acciones de la constancia */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <button
                    type="button"
                    onClick={handlePrint}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-lg">print</span>
                    Imprimir / Guardar Constancia (PDF)
                  </button>

                  <button
                    type="button"
                    onClick={handleClose}
                    className="w-full sm:w-auto px-8 py-3 rounded-xl bg-primary hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-[0_0_25px_rgba(16,185,129,0.25)] cursor-pointer"
                  >
                    Finalizar y Cerrar
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* 1. Identificación del Consumidor */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                    <span className="material-symbols-outlined text-primary text-xl">person</span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-white">
                      1. Identificación del Consumidor
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Nombres y Apellidos */}
                    <div className="space-y-1.5 md:col-span-2">
                      <label htmlFor={`${idPrefix}-fullname`} className="text-xs font-semibold text-slate-300">
                        Nombres y Apellidos Completos / Razón Social <span className="text-primary">*</span>
                      </label>
                      <input
                        id={`${idPrefix}-fullname`}
                        required
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Ej. Juan Carlos Pérez Morales"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      />
                    </div>

                    {/* Tipo de Documento */}
                    <div className="space-y-1.5">
                      <label htmlFor={`${idPrefix}-doctype`} className="text-xs font-semibold text-slate-300">
                        Tipo de Documento <span className="text-primary">*</span>
                      </label>
                      <select
                        id={`${idPrefix}-doctype`}
                        value={docType}
                        onChange={(e) => setDocType(e.target.value as DocumentType)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0f141b] border border-white/10 text-white text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all cursor-pointer"
                      >
                        <option value="DNI">DNI (Documento Nacional de Identidad)</option>
                        <option value="CE">Carné de Extranjería (CE)</option>
                        <option value="PASAPORTE">Pasaporte</option>
                        <option value="RUC">RUC</option>
                      </select>
                    </div>

                    {/* Número de Documento */}
                    <div className="space-y-1.5">
                      <label htmlFor={`${idPrefix}-docnumber`} className="text-xs font-semibold text-slate-300">
                        Número de Documento <span className="text-primary">*</span>
                      </label>
                      <input
                        id={`${idPrefix}-docnumber`}
                        required
                        type="text"
                        value={docNumber}
                        onChange={(e) => setDocNumber(e.target.value)}
                        placeholder={docType === "DNI" ? "8 dígitos" : docType === "RUC" ? "11 dígitos" : "N° de documento"}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm font-mono focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      />
                    </div>

                    {/* Teléfono */}
                    <div className="space-y-1.5">
                      <label htmlFor={`${idPrefix}-phone`} className="text-xs font-semibold text-slate-300">
                        Teléfono / Celular <span className="text-primary">*</span>
                      </label>
                      <input
                        id={`${idPrefix}-phone`}
                        required
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Ej. +51 987 654 321"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm font-mono focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      />
                    </div>

                    {/* Correo Electrónico */}
                    <div className="space-y-1.5">
                      <label htmlFor={`${idPrefix}-email`} className="text-xs font-semibold text-slate-300">
                        Correo Electrónico (Para envío de constancia y respuesta) <span className="text-primary">*</span>
                      </label>
                      <input
                        id={`${idPrefix}-email`}
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu.correo@ejemplo.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      />
                    </div>

                    {/* Domicilio */}
                    <div className="space-y-1.5">
                      <label htmlFor={`${idPrefix}-address`} className="text-xs font-semibold text-slate-300">
                        Dirección / Domicilio <span className="text-primary">*</span>
                      </label>
                      <input
                        id={`${idPrefix}-address`}
                        required
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Av. / Calle, N°, Urbanización"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      />
                    </div>

                    {/* Distrito / Ciudad */}
                    <div className="space-y-1.5">
                      <label htmlFor={`${idPrefix}-district`} className="text-xs font-semibold text-slate-300">
                        Distrito / Departamento <span className="text-primary">*</span>
                      </label>
                      <input
                        id={`${idPrefix}-district`}
                        required
                        type="text"
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        placeholder="Ej. Surco, Lima"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Menor de Edad Toggle */}
                  <div className="pt-2">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={isMinor}
                        onChange={(e) => setIsMinor(e.target.checked)}
                        className="w-4 h-4 rounded border-white/20 bg-white/5 text-primary focus:ring-primary focus:ring-offset-0 transition-all cursor-pointer"
                      />
                      <span className="text-xs text-slate-300 group-hover:text-white transition-colors">
                        El consumidor reclamante es menor de edad (requiere datos de apoderado conforme a ley).
                      </span>
                    </label>

                    {isMinor && (
                      <div className="mt-3 p-4 rounded-xl bg-white/[0.02] border border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-200">
                        <div className="space-y-1.5">
                          <label htmlFor={`${idPrefix}-parentname`} className="text-xs font-semibold text-slate-300">
                            Nombres del Padre/Madre o Apoderado <span className="text-primary">*</span>
                          </label>
                          <input
                            id={`${idPrefix}-parentname`}
                            required={isMinor}
                            type="text"
                            value={parentName}
                            onChange={(e) => setParentName(e.target.value)}
                            placeholder="Nombre del apoderado legal"
                            className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-primary outline-none"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label htmlFor={`${idPrefix}-parentdoc`} className="text-xs font-semibold text-slate-300">
                            DNI o Documento del Apoderado <span className="text-primary">*</span>
                          </label>
                          <input
                            id={`${idPrefix}-parentdoc`}
                            required={isMinor}
                            type="text"
                            value={parentDocNumber}
                            onChange={(e) => setParentDocNumber(e.target.value)}
                            placeholder="Documento del apoderado"
                            className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-mono focus:border-primary outline-none"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* 2. Identificación del Bien Contratado */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                    <span className="material-symbols-outlined text-primary text-xl">inventory_2</span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-white">
                      2. Identificación del Bien Contratado
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Selector de Producto vs Servicio */}
                    <div className="md:col-span-2">
                      <label className="text-xs font-semibold text-slate-300 block mb-2">
                        Tipo de Bien <span className="text-primary">*</span>
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setContractedType("servicio")}
                          className={`p-3.5 rounded-xl border flex items-center justify-center gap-2.5 font-medium text-sm transition-all cursor-pointer ${
                            contractedType === "servicio"
                              ? "bg-primary/15 border-primary text-white shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                              : "bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
                          }`}
                        >
                          <span className="material-symbols-outlined text-lg">code</span>
                          Servicio (Desarrollo, Consultoría, etc.)
                        </button>
                        <button
                          type="button"
                          onClick={() => setContractedType("producto")}
                          className={`p-3.5 rounded-xl border flex items-center justify-center gap-2.5 font-medium text-sm transition-all cursor-pointer ${
                            contractedType === "producto"
                              ? "bg-primary/15 border-primary text-white shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                              : "bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
                          }`}
                        >
                          <span className="material-symbols-outlined text-lg">package_2</span>
                          Producto (Software, Licencia)
                        </button>
                      </div>
                    </div>

                    {/* Descripción del bien contratado */}
                    <div className="space-y-1.5 md:col-span-2">
                      <label htmlFor={`${idPrefix}-contractdesc`} className="text-xs font-semibold text-slate-300">
                        Descripción del Producto o Servicio Contratado <span className="text-primary">*</span>
                      </label>
                      <input
                        id={`${idPrefix}-contractdesc`}
                        required
                        type="text"
                        value={contractedDescription}
                        onChange={(e) => setContractedDescription(e.target.value)}
                        placeholder="Ej. Desarrollo de Página Web Corporativa / Consultoría de Arquitectura Cloud"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      />
                    </div>

                    {/* Monto reclamado */}
                    <div className="space-y-1.5 md:col-span-2">
                      <div className="flex items-center justify-between">
                        <label htmlFor={`${idPrefix}-amount`} className="text-xs font-semibold text-slate-300">
                          Monto Reclamado (Opcional)
                        </label>
                        <label className="flex items-center gap-2 text-xs text-slate-400 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={noAmount}
                            onChange={(e) => setNoAmount(e.target.checked)}
                            className="w-3.5 h-3.5 rounded border-white/20 bg-white/5 text-primary focus:ring-primary cursor-pointer"
                          />
                          No cuantificable / No aplica monto dinerario
                        </label>
                      </div>

                      {!noAmount && (
                        <div className="flex gap-2 animate-in fade-in duration-200">
                          <select
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value as "PEN" | "USD")}
                            className="px-3 py-2.5 rounded-xl bg-[#0f141b] border border-white/10 text-white text-sm focus:border-primary outline-none cursor-pointer"
                          >
                            <option value="PEN">S/ (Soles)</option>
                            <option value="USD">$ (Dólares)</option>
                          </select>
                          <input
                            id={`${idPrefix}-amount`}
                            type="number"
                            step="0.01"
                            value={amountClaimed}
                            onChange={(e) => setAmountClaimed(e.target.value)}
                            placeholder="0.00"
                            className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm font-mono focus:border-primary outline-none"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* 3. Detalle de la Reclamación (Reclamo vs Queja conforme a INDECOPI) */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                    <span className="material-symbols-outlined text-primary text-xl">gavel</span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-white">
                      3. Detalle de la Reclamación
                    </h3>
                  </div>

                  {/* Diferenciación Legal Obligatoria entre Reclamo y Queja */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                      onClick={() => setClaimType("reclamo")}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer relative ${
                        claimType === "reclamo"
                          ? "bg-amber-500/10 border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.1)]"
                          : "bg-white/[0.02] border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-display font-bold text-sm text-white flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-amber-400 text-lg">warning</span>
                          RECLAMO
                        </span>
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          claimType === "reclamo" ? "border-amber-400 bg-amber-400" : "border-slate-500"
                        }`}>
                          {claimType === "reclamo" && <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                        </div>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Disconformidad relacionada a los productos o servicios brindados (ej. fallas técnicas, incumplimiento de requerimientos contractuales, tiempos de entrega de software).
                      </p>
                    </div>

                    <div
                      onClick={() => setClaimType("queja")}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer relative ${
                        claimType === "queja"
                          ? "bg-blue-500/10 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.1)]"
                          : "bg-white/[0.02] border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-display font-bold text-sm text-white flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-blue-400 text-lg">support_agent</span>
                          QUEJA
                        </span>
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          claimType === "queja" ? "border-blue-400 bg-blue-400" : "border-slate-500"
                        }`}>
                          {claimType === "queja" && <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                        </div>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Disconformidad NO relacionada directamente a los productos o servicios, sino al malestar respecto a la atención al cliente, trato recibido o canales de comunicación.
                      </p>
                    </div>
                  </div>

                  {/* Detalle */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label htmlFor={`${idPrefix}-claimdetail`} className="text-xs font-semibold text-slate-300">
                        Detalle de los Hechos (Explicación detallada) <span className="text-primary">*</span>
                      </label>
                      <span className="text-[10px] text-slate-400 font-mono">{claimDetails.length}/1500</span>
                    </div>
                    <textarea
                      id={`${idPrefix}-claimdetail`}
                      required
                      maxLength={1500}
                      rows={4}
                      value={claimDetails}
                      onChange={(e) => setClaimDetails(e.target.value)}
                      placeholder="Describa con claridad y precisión los hechos ocurridos, fechas, nombres de contacto o entregables involucrados..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-y"
                    />
                  </div>

                  {/* Pedido concreto */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label htmlFor={`${idPrefix}-claimrequest`} className="text-xs font-semibold text-slate-300">
                        Pedido Concreto del Consumidor <span className="text-primary">*</span>
                      </label>
                      <span className="text-[10px] text-slate-400 font-mono">{consumerRequest.length}/800</span>
                    </div>
                    <textarea
                      id={`${idPrefix}-claimrequest`}
                      required
                      maxLength={800}
                      rows={3}
                      value={consumerRequest}
                      onChange={(e) => setConsumerRequest(e.target.value)}
                      placeholder="Indique con claridad la solución o medida específica que solicita a VEXA para subsanar este reclamo o queja..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-y"
                    />
                  </div>
                </div>

                {/* 4. Declaración y Conformidad */}
                <div className="space-y-3 bg-white/[0.02] border border-white/10 p-5 rounded-2xl">
                  {/* Mensaje de plazo */}
                  <div className="p-3.5 rounded-xl bg-primary/10 border border-primary/20 text-xs text-slate-300 leading-relaxed flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg flex-shrink-0 mt-0.5">info</span>
                    <div>
                      <strong className="text-white">Plazo de Respuesta:</strong> Te responderemos en un plazo no mayor a <strong>quince (15) días hábiles</strong> directamente a tu correo electrónico registrado.
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        required
                        checked={acceptTruth}
                        onChange={(e) => setAcceptTruth(e.target.checked)}
                        className="w-4 h-4 mt-0.5 rounded border-white/20 bg-white/5 text-primary focus:ring-primary transition-all cursor-pointer flex-shrink-0"
                      />
                      <span className="text-xs text-slate-300 group-hover:text-white transition-colors">
                        Declaro bajo juramento que soy el titular del bien contratado o su representante legal y que la información brindada en este formulario es verdadera y fidedigna. <span className="text-primary">*</span>
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        required
                        checked={acceptPolicies}
                        onChange={(e) => setAcceptPolicies(e.target.checked)}
                        className="w-4 h-4 mt-0.5 rounded border-white/20 bg-white/5 text-primary focus:ring-primary transition-all cursor-pointer flex-shrink-0"
                      />
                      <span className="text-xs text-slate-300 group-hover:text-white transition-colors">
                        He leído y acepto la <span className="text-primary underline">Política de Privacidad</span> y autorizo el tratamiento de mis datos personales únicamente para la atención y seguimiento de esta reclamación. <span className="text-primary">*</span>
                      </span>
                    </label>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">error</span>
                      {errorMessage}
                    </div>
                  )}
                </div>

                {/* Botones de Acción */}
                <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleClose}
                    disabled={submitting}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium text-sm transition-all cursor-pointer disabled:opacity-50"
                  >
                    Cancelar
                  </button>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto px-8 py-3 rounded-xl bg-primary hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.45)] cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        Registrando Reclamación...
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-lg">send</span>
                        Registrar Hoja de Reclamación
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

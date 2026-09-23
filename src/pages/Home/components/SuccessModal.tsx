interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

export function SuccessModal({ open, onClose }: SuccessModalProps) {
  return (
    <div
      id="success-modal"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300${open ? "" : " opacity-0 pointer-events-none"}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`bg-[#111111] border border-white/10 rounded-2xl p-8 max-w-sm w-full mx-4 text-center transform transition-transform duration-300 ${open ? "scale-100" : "scale-95"}`}
        id="modal-content"
      >
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
          <span className="material-symbols-outlined text-3xl">check_circle</span>
        </div>
        <h3 className="font-display text-2xl font-bold mb-2 text-white">¡Mensaje Enviado!</h3>
        <p className="text-slate-400 mb-8">
          Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.
        </p>
        <button
          id="close-modal-btn"
          onClick={onClose}
          className="w-full py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

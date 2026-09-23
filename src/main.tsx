import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.css";

// Protección básica de contenido (igual que el sitio original): sin menú contextual ni arrastre.
const block = (e: Event) => e.preventDefault();
document.addEventListener("contextmenu", block);
document.addEventListener("dragstart", block);
document.addEventListener("drop", block);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

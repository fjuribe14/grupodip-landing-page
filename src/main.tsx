import "@/i18n";
import "@/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Providers from "@/providers";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Providers />
  </StrictMode>,
);

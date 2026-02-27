import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RoutesProvider from "./providers/RoutesProvider";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RoutesProvider />
    </StrictMode>,
  );
}

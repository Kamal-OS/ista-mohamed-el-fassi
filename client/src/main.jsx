import { LoadingProvider } from "@/contexts/LoadingContext";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./assets/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/ista-mohamed-el-fassi/">
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </BrowserRouter>
  </StrictMode>,
);

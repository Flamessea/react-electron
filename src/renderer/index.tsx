import React from "react";
import { createRoot } from "react-dom/client";
import "./style/index.scss";
import App from "./App";

const root = createRoot(
  document.getElementById("__renderer_root") as HTMLElement
);

root.render(<App />);

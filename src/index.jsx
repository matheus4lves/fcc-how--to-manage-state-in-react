import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

const el = document.createElement("div");
el.setAttribute("id", "root");
document.body.appendChild(el);

const root = createRoot(document.getElementById("root"));
root.render(<App />);

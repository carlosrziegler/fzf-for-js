import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./app.css";

import Home from "./views/home.mdx";
import { Basic } from "./views/basic";
import { Custom } from "./views/custom";
import { WithWorker } from "./views/with-worker";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="basic" element={<Basic />} />
        <Route path="custom" element={<Custom />} />
        <Route path="with-worker" element={<WithWorker />} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </Router>
  );
}

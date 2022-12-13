import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/layout/Home";
import Detail from "../components/layout/Detail";

export default function Homepage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

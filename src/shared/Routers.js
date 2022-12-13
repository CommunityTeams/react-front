import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/layout/Home";
import PostAdd from "../components/pages/PostAdd";

export default function Homepage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Post/add" element={<PostAdd />} />
      </Routes>
    </BrowserRouter>
  );
}

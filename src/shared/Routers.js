import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/layout/Home";
import { Header } from "../components/layout/Header";
import PostAdd from "../components/pages/PostAdd";
import Detail from "../components/pages/Detail";

export default function Homepage() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Post/add" element={<PostAdd />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/layout/Home";
import Header from "../components/layout/Header";
import PostAdd from "../components/pages/PostAdd";

export default function Homepage() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Post/add" element={<PostAdd />} />
      </Routes>
    </BrowserRouter>
  );
}

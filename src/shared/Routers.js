import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from '../components/features/Home';

export default function Homepage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

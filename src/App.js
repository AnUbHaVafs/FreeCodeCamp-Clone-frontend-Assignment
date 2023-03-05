import React from 'react';
import Header from './Components/Header';
import Signin from './Components/Signin';
import Dashboard from './Components/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/landingpage' element={<Header />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
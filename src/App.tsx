import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { CalcHafeleWoodPro } from './components/CalcHafeleWoodPro/CalcHafeleWoodPro';
import { PageCaclBlum } from './pages/PageCalcBlum/PageCalcBlum';
import { PageHome } from './pages/PageHome/PageHome';

function App() {
  return (
    <div className="container">
      <nav>
        <Link to="/">Главная</Link>
      </nav>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="blum" element={<PageCaclBlum />} />
        <Route path="hafele" element={<CalcHafeleWoodPro />} />
      </Routes>
      
    </div>
  );
}

export default App;

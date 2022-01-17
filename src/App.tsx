import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import { CalcHafeleWoodPro } from './components/CalcHafeleWoodPro/CalcHafeleWoodPro';
import { PageCaclBlum } from './pages/PageCalcBlum/PageCalcBlum';
import { PageHome } from './pages/PageHome/PageHome';



function App() {
  return (
    <div className="container">
      <nav>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/hafele">Hafele</NavLink>
        <NavLink to="/blum">Blum</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="blum" element={<PageCaclBlum />} />
        <Route path="hafele" element={<CalcHafeleWoodPro />} />
      </Routes>
      
    </div>
  );
}

const NavLink = styled(Link)`
  padding: 20px;
  color: blue;
  text-decoration: none;
  &:hover {
    background: rgba(1,1,1,.1);
  }
`;

export default App;

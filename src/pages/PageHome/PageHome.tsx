import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export function PageHome() {
    return (
        <>
            <main>
                <h2>Калькулятор для рассчета ящиков под направляющие</h2>
            </main>
            <nav>
                <NavLink to="/hafele">Hafele Wood Pro</NavLink>
                <NavLink to="/blum">Blum</NavLink>
            </nav>
        </>
    );
}

const NavLink = styled(Link)`
    padding: 10px;
    color: blue;
    display: block;
`;
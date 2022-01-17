import React from 'react';
import { Link } from 'react-router-dom';


export function PageHome() {
    return (
        <>
            <main>
                <h2>Калькулятор для рассчета ящиков под направляющие</h2>
            </main>
            <nav>
                <Link to="/hafele">Hafele Wood Pro</Link>
                <Link to="/blum">Blum</Link>
            </nav>
        </>
    );
}
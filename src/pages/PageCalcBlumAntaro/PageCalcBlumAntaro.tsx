import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { MainLayoutContext } from '../../layouts/MainLayout/MainLayout';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: rgb(219, 112, 147);
`;

const DetailsBlock = styled.div`
    white-space: pre;
    margin-left: 1rem;
    line-height: 1.5;
    font-family: 'Courier New', Courier, monospace;
`;

const DocumentLink = styled.a`
    color: blue;
    display: inline-block;
    padding: 10px;
    text-decoration: none;

    &:hover{
        background-color: rgba(0,0,0,.1);
    }
`;

export function PageCalcBlumAntaro() {
    const layoutCtx = useContext(MainLayoutContext);
    useEffect(() => layoutCtx('Antaro (M)', './tandembox_antaro.pdf'), [layoutCtx]);

    const [width, setWidth] = useState(700 - 36);
    const [nominalLength, setNominalLength] = useState(500);
    const [gapForChipboardEdge, setGapForChipboardEdge] = useState(1); // зазор на кромку

    const bottomWidth = width - 75 - gapForChipboardEdge; // LW - 75mm
    const bottomLength = nominalLength - 24 - gapForChipboardEdge; // NL - 24mm

    const backWidth = width - 87 - gapForChipboardEdge; // LW - 87mm
    const backHeight = 84 - gapForChipboardEdge; // size M - 84mm

    const detailsTxt =
        `${bottomWidth} x ${bottomLength} - 1шт` + "\n" +
        `${backWidth} x ${backHeight} - 1шт` + "\n" +
        "Толщина ДСП: 16мм\n" +
        `Зазор на кромку (по всем торцам деталей): ${gapForChipboardEdge}`;

    return (
        <div>
            <Title>Рассчет шухляды для Tandembox Antaro Blum (Высота M 84mm)</Title>

            <DocumentLink href="./tandembox_antaro.pdf" target="_blank">📝 Documentation: Blum Tandembox Antaro</DocumentLink>

            <div>
                <div>
                    Внутрення ширина корпуса (тумбы)
                    <input value={width} onInput={(e) => setWidth(parseInt((e.target as any).value))} />
                </div>
                <div>
                    Номинальная длинна ящика
                    <input value={nominalLength} onInput={(e) => setNominalLength(parseInt((e.target as any).value))} />
                </div>
                <div>
                    Погрешность на кромку
                    <input value={gapForChipboardEdge} onInput={(e) => setGapForChipboardEdge(parseInt((e.target as any).value))} />
                </div>
            </div>

            <div>
                <h3>Итого рассчитанные значения</h3>
                <div>
                    <h4>
                        Дно
                    </h4>
                    <div>
                        Ширина: {bottomWidth}<br />
                        Длинна: {bottomLength}<br />
                    </div>
                </div>

                <div>
                    <h4>
                        Задняя стенка
                    </h4>
                    <div>
                        Ширина: {backWidth}<br />
                        Высота: {backHeight}<br />
                    </div>
                </div>
            </div>

            <div>
                <h3>Детали</h3>
                <DetailsBlock>{detailsTxt}</DetailsBlock>
            </div>
        </div>
    );
}

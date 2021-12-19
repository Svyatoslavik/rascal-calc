import react, { useState } from 'react';
import styled from 'styled-components';
import './CalcHafeleWoodPro.css';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export function CalcHafeleWoodPro() {

  const [width, setWidth] = useState(800 - 36);
  const [height, setHeight] = useState(200);
  const [depth, setDepth] = useState(500);
  const [dspWidth, setDspWidth] = useState(16);
  const [hem, setHem] = useState(0);

  const bottomWidth = width - 49 - hem;
  const bottomDepth = depth - dspWidth - hem;

  const backWidth = width - 49 - hem;
  const backHeight = height - hem;

  const sideHeight = height + 12 - hem;
  const sideDepth = depth - hem;

  const frontWidth = width - 49 - hem;
  const frontHeight = height - dspWidth - hem;

  const detailsTxt = 
`${bottomWidth} x ${bottomDepth} - 1шт
${backWidth} x ${backHeight} - 1шт
${frontWidth} x ${frontHeight} - 1шт
${sideDepth} x ${sideHeight} - 2шт

Толщина ДСП: ${dspWidth}

Зазор на кромку (по всем торцам деталей): ${hem} 
`

  return (
    <div>
      <Title>Рассчет шухляды для Hafele Wood Pro</Title>
      <a href="./Woodpro.pdf" target="_blank">Hafele Wood Pro doc</a>
      <div>
        <div>
          Внутрення ширина корпуса (тумбы)
          <input value={width} onInput={(e) => setWidth(parseInt((e.target as any).value))} />
        </div>
        <div>
          Глубина шухляды
          <input value={depth} onInput={(e) => setDepth(parseInt((e.target as any).value))} />
        </div>
        <div>
          Высота шухляды
          <input value={height} onInput={(e) => setHeight(parseInt((e.target as any).value))} />
        </div>
        <div>
          Толщина дсп
          <input value={dspWidth} onInput={(e) => setDspWidth(parseInt((e.target as any).value))} />
        </div>

        <div>
          Погрешность на кромку
          <input value={hem} onInput={(e) => setHem(parseInt((e.target as any).value))} />
        </div>
      </div>
      <div>
        <h3>Итого рассчитанные значения</h3>
        <div>
          <h4>
            Дно
          </h4>
          <div>
            Ширина: { bottomWidth }<br/>
            Длинна: { bottomDepth }<br/>
          </div>
        </div>
        
        <div>
          <h4>
          Задняя стенка
          </h4>
          <div>
            Ширина: { backWidth }<br/>
            Высота: { backHeight }<br/>
          </div>
        </div>
        <div>
          <h4>
          Боковухи (2шт)
          </h4>
          <div>
            Длинна: { sideDepth }<br/>
            Высота: { sideHeight }<br/>
          </div>
        </div>
        <div>
          <h4>
          Передняя (фронт) стенка
          </h4>
          <div>
            Ширина: { frontWidth }<br/>
            Высота: { frontHeight }<br/>
          </div>
        </div>

        <div>
          <h4>
            Другие данные:
          </h4>
          <p>
            Высота блока (шухляда + направляющие) {height + 28}
          </p>
          <p>
            Минимальная глубина корпуса {depth + 18}
          </p>
        </div>
      </div>

      <div>
        <h3>Детали</h3>
        <div className="details-block">{detailsTxt}</div> 
      </div>
    </div>
  );
}

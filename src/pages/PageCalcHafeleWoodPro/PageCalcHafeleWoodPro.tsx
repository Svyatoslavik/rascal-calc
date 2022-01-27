import react, { useState } from 'react';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@mui/material';
import { MainLayout } from '../../layouts/MainLayout/MainLayout';

const CalcItemResult = ({
  title,
  items,
  titleWidth,
}: {
  title: string;
  titleWidth?: number
  items: {
    title: string;
    value: string | number;
  }[];
}) => (
  <>
    <Typography component="h3" variant="h6" gutterBottom sx={{ mt: 3 }}>
      {title}
    </Typography>
    <TableContainer>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableBody>
          {items.map(({ title, value }, i) => (
            <TableRow>
              <TableCell component="th" scope="row" style={{ width: titleWidth || 160 }}>
                {title}
              </TableCell>
              <TableCell >
                {value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
);




export function PageCalcHafeleWoodPro() {

  const [width, setWidth] = useState(800 - 36);
  const [height, setHeight] = useState(200);
  const [depth, setDepth] = useState(500);
  const [dspWidth, setDspWidth] = useState(16);
  const [hem, setHem] = useState(1);

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
    <MainLayout title="Hafele Wood Pro" linkToDocument="./Woodpro.pdf">
      <Typography variant="h3">
        Рассчет шухляды для Hafele Wood Pro
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            label="Внутрення ширина корпуса (тумбы)"
            fullWidth
            variant="standard"
            value={width}
            onInput={(e) => setWidth(parseInt((e.target as any).value))}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            label="Глубина шухляды"
            fullWidth
            variant="standard"
            value={depth}
            onInput={(e) => setDepth(parseInt((e.target as any).value))}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            label="Высота шухляды"
            fullWidth
            variant="standard"
            value={height}
            onInput={(e) => setHeight(parseInt((e.target as any).value))}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            label="Толщина дсп"
            fullWidth
            variant="standard"
            value={dspWidth}
            onInput={(e) => setDspWidth(parseInt((e.target as any).value))}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            label="Погрешность на кромку"
            fullWidth
            variant="standard"
            value={hem}
            onInput={(e) => setHem(parseInt((e.target as any).value))}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mt: 4, mb: 4 }}>
        <Grid item xs={12}>
          <Paper sx={{
            p: 2,
          }}>
            <Typography component="h2" variant="h5" color="primary" gutterBottom>
              Итого рассчитанные значения
            </Typography>

            <CalcItemResult
              title="Дно"
              items={[
                { title: 'Ширина', value: bottomWidth },
                { title: 'Длинна', value: bottomDepth },
              ]}
            />

            <CalcItemResult
              title="Задняя стенка"
              items={[
                { title: 'Ширина', value: backWidth },
                { title: 'Высота', value: backHeight },
              ]}
            />

            <CalcItemResult
              title="Боковухи (2шт)"
              items={[
                { title: 'Длинна', value: sideDepth },
                { title: 'Высота', value: sideHeight },
              ]}
            />

            <CalcItemResult
              title="Передняя (фронт) стенка"
              items={[
                { title: 'Ширина', value: frontWidth },
                { title: 'Высота', value: frontHeight },
              ]}
            />


          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{
            p: 2,
          }}>
            <Typography component="h2" variant="h5" color="primary" gutterBottom>
              Другие данные:
            </Typography>

            <CalcItemResult
              titleWidth={300}
              title="Дно"
              items={[
                { title: 'Высота блока (шухляда + направляющие)', value: height + 28 },
                { title: 'Минимальная глубина корпуса', value: depth + 18 },
              ]}
            />
          </Paper>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Paper sx={{
          p: 2,
        }}>
          <Typography component="h2" variant="h5" color="primary" gutterBottom>
            Детали:
          </Typography>
          <Typography id="modal-description" sx={{ whiteSpace: 'pre-line', p: 3 }}>
            {detailsTxt}
          </Typography>
        </Paper>

      </Grid>
    </MainLayout>
  );
}

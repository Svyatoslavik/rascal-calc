import react, { useContext, useEffect, useState } from 'react';
import { Grid, Paper, TextField, Typography } from '@mui/material';
import { MainLayoutContext } from '../../layouts/MainLayout/MainLayout';
import { parseEventNum } from '../../utils/utils';
import { Details } from '../../components/Details/Details';
import { ItemDetails } from '../../components/ItemDetails/ItemDetails';
import { Title } from '../../components/Title/Title';
import { RunnerSystemForm, RunnerSystemFormState } from '../../components/RunnerSystemForm/RunnerSystemForm';

export function PageCalcHafeleWoodPro() {
  const layoutCtx = useContext(MainLayoutContext);
  useEffect(() => layoutCtx('Hafele Wood Pro', './Woodpro.pdf'), [layoutCtx]);
  const [formState, setFormState] = useState<RunnerSystemFormState>({
    width: 700 - 36,
    height: 180,
    length: 500,
    dspWidth: 16,
    gapForChipboardEdge: 1,
  });

  const {
    width,
    height,
    length: depth,
    dspWidth,
    gapForChipboardEdge: hem,
  } = formState;


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
    <>
      <Title>
        Рассчет шухляды для Hafele Wood Pro
      </Title>

      <RunnerSystemForm 
        state={formState}
        onChange={setFormState}
      />

      <Grid container spacing={3} sx={{ mt: 4, mb: 4 }}>
        <Grid item xs={12}>
          <Paper sx={{
            p: 2,
          }}>
            <Typography component="h2" variant="h5" color="primary" gutterBottom>
              Итого рассчитанные значения
            </Typography>

            <ItemDetails
              title="Дно"
              items={[
                { title: 'Ширина', value: bottomWidth },
                { title: 'Длинна', value: bottomDepth },
              ]}
            />

            <ItemDetails
              title="Задняя стенка"
              items={[
                { title: 'Ширина', value: backWidth },
                { title: 'Высота', value: backHeight },
              ]}
            />

            <ItemDetails
              title="Боковухи (2шт)"
              items={[
                { title: 'Длинна', value: sideDepth },
                { title: 'Высота', value: sideHeight },
              ]}
            />

            <ItemDetails
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

            <ItemDetails
              titleWidth={300}
              items={[
                { title: 'Высота блока (шухляда + направляющие)', value: height + 28 },
                { title: 'Минимальная глубина корпуса', value: depth + 18 },
              ]}
            />
          </Paper>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Details>{detailsTxt}</Details>
      </Grid>
    </>
  );
}

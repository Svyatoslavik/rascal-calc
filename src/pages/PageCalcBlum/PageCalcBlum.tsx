import react, { useContext, useEffect, useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { Details } from '../../components/Details/Details';
import { Title } from '../../components/Title/Title';
import { MainLayoutContext } from '../../layouts/MainLayout/MainLayout';
import { RunnerSystemForm, RunnerSystemFormState } from '../../components/RunnerSystemForm/RunnerSystemForm';
import { ItemDetails } from '../../components/ItemDetails/ItemDetails';

export function PageCaclBlum() {
    const layoutCtx = useContext(MainLayoutContext);
    useEffect(() => layoutCtx('Blum Tandem 560F5000', './blum560f5000.pdf'), [layoutCtx]);

    const [formState, setFormState] = useState<RunnerSystemFormState>({
        width: 700 - 36,
        height: 180,
        length: 500,
        dspWidth: 16,
        gapForChipboardEdge: 1, // зазор на кромку
    });

    const {
        width,
        height,
        length: nominalLength,
        dspWidth,
        gapForChipboardEdge: hem,
    } = formState;

    // const drawerLength = nominalLength - 10; // отнимаем 10мм согласно инструкции к направляющей,
    const drawerLength = nominalLength - 8; // Но: практика показала что отнять надо только 8мм 

    const bottomWidth = width - 49 - hem;
    const bottomDepth = drawerLength - dspWidth - hem - 1; // онимаем 1мм на зазор для днища шухляды

    const backWidth = width - 49 - hem;
    const backHeight = height - hem;

    const sideHeight = height + 12 - hem;
    const sideDepth = drawerLength - hem;

    const frontWidth = width - 49 - hem;
    const frontHeight = height - dspWidth - hem;

    const detailsTxt =
        `${bottomWidth} x ${bottomDepth} - 1шт` + "\n" +
        `${backWidth} x ${backHeight} - 1шт` + "\n" +
        `${frontWidth} x ${frontHeight} - 1шт` + "\n" +
        `${sideDepth} x ${sideHeight} - 2шт` + "\n\n" +
        `Толщина ДСП: ${dspWidth}` + "\n" +
        `Зазор на кромку (по всем торцам деталей): ${hem} `;

    return (
        <>
            <Title>Рассчет шухляды для направляющей Blum</Title>

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
                                { title: 'Минимальная глубина корпуса', value: nominalLength + 18 },
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

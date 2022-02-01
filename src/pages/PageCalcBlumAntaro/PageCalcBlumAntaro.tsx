import { Grid, Paper, TextField, Typography } from '@mui/material';
import react, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Details } from '../../components/Details/Details';
import { ItemDetails } from '../../components/ItemDetails/ItemDetails';
import { Title } from '../../components/Title/Title';
import { MainLayoutContext } from '../../layouts/MainLayout/MainLayout';
import { parseEventNum } from '../../utils/utils';

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
        <>
            <Title>Рассчет шухляды для Tandembox Antaro Blum (Высота M 84mm)</Title>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <TextField
                        required
                        inputProps={{ inputMode: 'numeric' }}
                        label="Внутрення ширина корпуса (тумбы)"
                        fullWidth
                        variant="standard"
                        value={width}
                        onInput={(e) => setWidth(parseEventNum(e))}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        required
                        inputProps={{ inputMode: 'numeric' }}
                        label="Номинальная длинна ящика"
                        fullWidth
                        variant="standard"
                        value={nominalLength}
                        onInput={(e) => setNominalLength(parseEventNum(e))}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        required
                        inputProps={{ inputMode: 'numeric' }}
                        label="Погрешность на кромку"
                        fullWidth
                        variant="standard"
                        value={gapForChipboardEdge}
                        onInput={(e) => setGapForChipboardEdge(parseEventNum(e))}
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

                        <ItemDetails
                            title="Дно"
                            items={[
                                { title: 'Ширина', value: bottomWidth },
                                { title: 'Длинна', value: bottomLength },
                            ]}
                        />

                        <ItemDetails
                            title="Задняя стенка"
                            items={[
                                { title: 'Ширина', value: backWidth },
                                { title: 'Высота', value: backHeight },
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

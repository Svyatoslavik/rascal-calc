import react from 'react';
import { Grid, TextField } from '@mui/material';
import { parseEventNum } from '../../utils/utils';

export type RunnerSystemFormState = {
    width: number;
    length: number;
    height: number;
    dspWidth: number;
    gapForChipboardEdge: number;
}

export const RunnerSystemForm = ({ state, onChange }: {state: RunnerSystemFormState, onChange: (newState: RunnerSystemFormState) => void}) => {

    const updateState = (stateDiff: Partial<RunnerSystemFormState>) => {
        onChange({
            ...state,
            ...stateDiff,
        });
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <TextField
                    required
                    inputProps={{ inputMode: 'numeric' }}
                    label="Внутрення ширина корпуса (тумбы)"
                    fullWidth
                    variant="standard"
                    value={state.width}
                    onInput={(e) => updateState({ width: parseEventNum(e) })}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    required
                    inputProps={{ inputMode: 'numeric' }}
                    label="Глубина шухляды"
                    fullWidth
                    variant="standard"
                    value={state.length}
                    onInput={(e) => updateState({ length: parseEventNum(e) })}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    required
                    inputProps={{ inputMode: 'numeric' }}
                    label="Высота шухляды"
                    fullWidth
                    variant="standard"
                    value={state.height}
                    onInput={(e) => updateState({ height: parseEventNum(e)} )}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    required
                    inputProps={{ inputMode: 'numeric' }}
                    label="Толщина дсп"
                    fullWidth
                    variant="standard"
                    value={state.dspWidth}
                    onInput={(e) => updateState({ dspWidth: parseEventNum(e) })}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    required
                    inputProps={{ inputMode: 'numeric' }}
                    label="Погрешность на кромку"
                    fullWidth
                    variant="standard"
                    value={state.gapForChipboardEdge}
                    onInput={(e) => updateState({ gapForChipboardEdge: parseEventNum(e) })}
                />
            </Grid>
        </Grid>
    );
}

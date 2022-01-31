import React, { PropsWithChildren } from 'react';
import { Paper, Typography } from '@mui/material';


export function Details(props: PropsWithChildren<{}>) {
    return (
        <Paper sx={{
            p: 2,
        }}>
            <Typography component="h2" variant="h5" color="primary" gutterBottom>
                Детали:
            </Typography>
            <Typography id="modal-description" sx={{ whiteSpace: 'pre-line', p: 3 }}>
                {props?.children}
            </Typography>
        </Paper>
    )
}

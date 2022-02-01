import react, { PropsWithChildren } from 'react';
import { Typography } from '@mui/material';

export const Title = (props: PropsWithChildren<{}>) => (
    <Typography variant="h3" sx={{ mb: 3, fontSize: { xs: '1rem', md: '3rem' } }}>
        {props?.children}
    </Typography>
);

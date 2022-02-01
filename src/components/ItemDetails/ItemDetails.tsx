import react from 'react';
import { Typography, TableContainer, Table, TableBody, TableRow, TableCell } from '@mui/material';

export const ItemDetails = ({
    title,
    items,
}: {
    title?: string;
    titleWidth?: number
    items: {
        title: string;
        value: string | number;
    }[];
}) => (
    <>
        {title && (<Typography component="h3" variant="h6" gutterBottom sx={{ mt: 3 }}>
            {title}
        </Typography>)}
        <TableContainer>
            <Table aria-label="custom pagination table">
                <TableBody>
                    {items.map(({ title, value }, i) => (
                        <TableRow key={i}>
                            <TableCell component="th" scope="row" style={{ width: 1, whiteSpace: 'nowrap' }}>
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

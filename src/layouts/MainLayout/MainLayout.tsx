import React, { PropsWithChildren } from 'react';
import {
    Link as RouterLink,
} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, CssBaseline } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

export function MainLayout(props: PropsWithChildren<{
    title: string;
    linkToDocument?: string;
}>) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ display: 'flex', pr: 2 }}>
                        {props.title}
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: 'flex' }}>
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            component={RouterLink} to="/"
                        >
                            Home
                        </Button>
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            component={RouterLink} to="/hafele"
                        >
                            Hafele
                        </Button>
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            component={RouterLink} to="/blum"
                        >
                            Blum Tandem
                        </Button>
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            component={RouterLink} to="/antaro"
                        >
                            Blum Antaro
                        </Button>
                    </Box>
                    {
                        props.linkToDocument &&
                        <IconButton
                            component="a"
                            target="_blank"
                            href={props.linkToDocument}
                            color="inherit">
                            <PictureAsPdfIcon />
                        </IconButton>
                    }

                </Toolbar>
            </AppBar>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                {props.children}
            </Container>
        </Box>
    );
}

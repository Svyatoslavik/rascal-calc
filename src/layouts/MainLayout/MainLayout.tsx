import React, { PropsWithChildren, useState } from 'react';
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
import { Container, CssBaseline, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import HomeIcon from '@mui/icons-material/Home';
import CalculateIcon from '@mui/icons-material/Calculate';

type NullableString = string | null;

export const MainLayoutContext = React.createContext(
    (title: NullableString, downdloadLink: NullableString) => { }
);

export function MainLayout(props: PropsWithChildren<{}>) {
    const [isDrawerOpn, setIsDrawerOpen] = useState(false);

    const [title, setTitle] = useState<NullableString>(null);
    const [linkToDocument, setLinkToDocument] = useState<NullableString>(null);

    const toggleDrawer = (open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event &&
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setIsDrawerOpen(open);
        };

    return (
        <>
            <MainLayoutContext.Provider value={(title: NullableString, downdloadLink: NullableString) => {
                setTitle(title);
                setLinkToDocument(downdloadLink);
            }}>
                <SwipeableDrawer
                    anchor="left"
                    open={isDrawerOpn}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    <Box
                        sx={{ width: 250 }}
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    >
                        <List>
                            <ListItem button component={RouterLink} to="/">
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Главная" />
                            </ListItem>
                            <ListItem button component={RouterLink} to="/hafele">
                                <ListItemIcon>
                                    <CalculateIcon />
                                </ListItemIcon>
                                <ListItemText primary="Hafele" />
                            </ListItem>
                            <ListItem button component={RouterLink} to="/blum">
                                <ListItemIcon>
                                    <CalculateIcon />
                                </ListItemIcon>
                                <ListItemText primary="Blum" />
                            </ListItem>
                            <ListItem button component={RouterLink} to="/antaro">
                                <ListItemIcon>
                                    <CalculateIcon />
                                </ListItemIcon>
                                <ListItemText primary="Antaro" />
                            </ListItem>
                        </List>

                    </Box>
                </SwipeableDrawer>
                <Box sx={{ flexGrow: 1 }}>
                    <CssBaseline />

                    <AppBar position="static">
                        <Toolbar>
                            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    onClick={toggleDrawer(true)}
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Box>

                            <Typography variant="h6" component="div" sx={{ flexGrow: { xs: 1, md: 0 }, display: 'flex', pr: 2 }}>
                                {title}
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <Button
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    component={RouterLink} to="/"
                                >
                                    Главная
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
                                linkToDocument &&
                                <IconButton
                                    component="a"
                                    target="_blank"
                                    href={linkToDocument}
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
            </MainLayoutContext.Provider>
        </>
    );
}

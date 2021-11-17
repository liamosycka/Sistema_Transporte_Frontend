import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
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
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/">
                            <Button color="inherit">Inicio</Button>
                        </Link>

                        <Link to="/about">
                            <Button color="inherit">About</Button>
                        </Link>
                        <Link to="/test">
                            <Button color="inherit">Test</Button>
                        </Link>
                        <Link to="/calendar">
                            <Button color="inherit">Calendar</Button>
                        </Link>
                        <Link to="/altaSolicitud">
                            <Button color="inherit">Alta Solicitud</Button>
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
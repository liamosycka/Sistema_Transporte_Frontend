import React, { Fragment } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';

import { MDCTopAppBar } from '@material/top-app-bar';

// Instantiation

function Inicio() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <Fragment>
            <Button>"Hola"</Button>
            <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
            <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<RestoreIcon />}
            />
            </BottomNavigation>
        </Fragment>
    )
}
export default Inicio;
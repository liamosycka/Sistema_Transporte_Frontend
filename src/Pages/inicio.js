import React, { Fragment } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function Inicio() {
    return (
        <Fragment>
            <Button variant="contained">PrimerBoton</Button>
            <p>INICIOOO</p>
            <TextField id="outlined-basic" variant="outlined" />
        </Fragment>
    )
}
export default Inicio;
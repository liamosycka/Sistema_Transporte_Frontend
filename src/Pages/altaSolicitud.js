import React, { Fragment } from 'react';
import FormSolicitud from '../Components/FormSolicitud'
import FormSolicitud2 from '../Components/FormSolicitud2'
import FormBultos from '../Components/FormBultos'
import Container from '@mui/material/Box';
import { shadows } from '@mui/system';
function AltaSolicitud() {
    return (
        <Fragment>
            <Container sx={{
                border: 3,
                borderColor: 'primary.main', mt: 1, ml: 4, mr: 4,
                mb: 1, borderRadius: 2, boxShadow: 1,
                bgcolor: 'primary.main', p: 3
            }}>
                <FormSolicitud2 />
                <br></br>
                <FormBultos/>
            </Container>
        </Fragment>
    )
}
export default AltaSolicitud;
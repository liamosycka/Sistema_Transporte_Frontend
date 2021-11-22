import React,{Fragment} from 'react';
import FormAsocRemitosViaje from '../Components/FormAsocRemitosViaje';
import Container from '@mui/material/Box';
import { shadows } from '@mui/system';
function AsocRemitosViaje() {
    return (
        <Fragment>
            <Container sx={{
                border: 3,
                borderColor: 'primary.main', mt: 1, ml: 4, mr: 4,
                mb: 1, borderRadius: 2, boxShadow: 1,
                bgcolor: 'primary.main', p: 3,
                color: 'white'
            }}>
            <FormAsocRemitosViaje />
            </Container>
        </Fragment>
    )
}
export default AsocRemitosViaje;
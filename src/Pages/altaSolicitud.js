import React,{Fragment} from 'react';
import FormSolicitud from '../Components/FormSolicitud'
import FormSolicitud2 from '../Components/FormSolicitud2'
import FormBultos from '../Components/FormBultos'

function AltaSolicitud() {
    return (
        <Fragment>
            <FormSolicitud2 />
            <FormBultos></FormBultos>
        </Fragment>
    )
}
export default AltaSolicitud;
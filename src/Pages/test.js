import React, { useState, useEffect, Fragment } from 'react'
import { Button, Form } from 'react-bootstrap'
import { getSolicitud, getLocalidades } from '../Services/Solicitud'
import 'bootstrap/dist/css/bootstrap.min.css';
//Importar Componentes
import MostrarLocalidades from '../Components/MostrarLocalidades'
import NavBar from '../Components/NavBar'
import CardTest from '../Components/CardTest';
//Fin Componentes
function Test() {
    const [nombre, setNombre] = useState("Nombre_X")
    const [solicitud, setSolicitud] = useState()
    const [localidades, setLocalidades] = useState()

    // Authorization scopes required by the API; multiple scopes can be
    // included, separated by spaces.

    useEffect(() => {
        //se ejecuta 1 sola vez al ingresar a la página.

        async function obtenerLocalidades() {

            const res = await getLocalidades()
            console.log(res)
            setLocalidades(res.data)
        }
        obtenerLocalidades()

    }, []

    )
    const obtenerSolicitud = async (id_sol) => {
        const res = await getSolicitud(id_sol)
        setSolicitud(res.data)
    }




    return (
        <Fragment>
            <Button onClick={() => obtenerSolicitud("S3")}>
                Tocar
            </Button>
            <p>Solicitud: {solicitud ? solicitud.destinatario : " No hay Solicitud"}</p>
            <select>
                <option>***SELECCIONE***</option>
                {
                    localidades ?
                        localidades.map((loc, i) =>
                        (
                            <option key={i}>
                                Código postal: {loc.codigo_postal}
                                Nombre: {loc.nombre}
                            </option>
                        )
                        ) : "No hay localidades"
                }
            </select>
            <MostrarLocalidades solicitud={solicitud} codigo={localidades ? localidades[0].codigo_postal : ""} />
            <MostrarLocalidades solicitud={solicitud} codigo={localidades ? localidades[0].codigo_postal : ""} />


            <>
                <Form.Control size="lg" type="text" placeholder="Large text" />
                <br />
                <Form.Control type="text" placeholder="Normal text" />
                <br />
                <Form.Control size="sm" type="text" placeholder="Small text" />
            </>
        </Fragment>
    )
}
export default Test;
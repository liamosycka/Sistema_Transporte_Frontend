import React, { useState, useEffect, Fragment } from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import { getViajesFecha, getCierreViaje } from '../Services/Viaje'

import { Nav, NavItem, NavDropdown, MenuItem, Card, Button, Row, Col, Form, Container, Table } from 'react-bootstrap';
const FormCierreViaje = () => {
    const [viajes, setViajes] = useState()
    const [montoCierre, setMontoCierre] = useState()
    const [viajeSelec, setViajeSelec]=useState()
    async function obtenerViajesFecha(fecha) {
        const res = await getViajesFecha(fecha)
        res ?  setViajes(res.data):setViajes()
    }
    async function cerrarViaje(){
        console.log("en cerrar viaje con: ",viajeSelec)
        const res = await getCierreViaje(viajeSelec)
        res ? console.log("volvio con: ",res.data):console.log("")
        res ? setMontoCierre(res.data):setMontoCierre()
    }

    const handleInputChange = (event) => {
        if (event.target.name == 'fecha_viaje') {
            obtenerViajesFecha(event.target.value)
        }
        if (event.target.name == 'viaje') {
            setViajeSelec(event.target.value)
        }
    }


    return (
        <Fragment>
            <Form id="form_solicitud">
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <Row>
                            <Col sm={10}>
                                <Form.Group controlId="select_fecha_cerrar">
                                    <Form.Label>Fecha del viaje</Form.Label>
                                    <input id="fecha_viaje" type="date" class="form-control" name="fecha_viaje" onChange={e => handleInputChange(e)}></input>
                                </Form.Group>
                            </Col>
                            <Col sm={10}>
                                <Form.Group controlId="select_viaje_cerrar">
                                    <Form.Label>Seleccionar viaje</Form.Label>
                                    <select id="select_viaje" class='form-control' onChange={handleInputChange} name="viaje">
                                        <option>***SELECCIONE***</option>
                                        {
                                            viajes ?
                                                viajes.map((viaje, i) =>
                                                (
                                                    <option key={i} value={viaje.id}>
                                                        Viaje: {viaje.id}
                                                    </option>
                                                )
                                                ) : "No hay viajes"
                                        }
                                    </select>
                                </Form.Group>
                            </Col>
                            <Form.Label>&nbsp;</Form.Label>
                        </Row>
                    </Col>
                </Row>
            </Form>,
            <Row>
                <Col md={{ span:2, offset: 1 }}>
                    <Form.Group controlId="monto?cierre">
                        <Form.Label>Monto de Cierre</Form.Label>
                        <input id="nombre_destino" type="text" value={montoCierre ? montoCierre: "0"} className="form-control" onChange={handleInputChange} name="monto_cierre"></input>
                    </Form.Group>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    <Button onClick={cerrarViaje}variant="success">Cerrar viaje</Button>{' '}
                </Col>
            </Row>
        </Fragment>
    )
}
export default FormCierreViaje;
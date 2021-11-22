import React, { useState, useEffect, Fragment } from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import { getRemitosChoferEstado, putAsocSolRemito } from '../Services/Remito'
import { getSolicitudes } from '../Services/Solicitud'

import { Nav, NavItem, NavDropdown, MenuItem, Card, Button, Row, Col, Form, Container, Table } from 'react-bootstrap';

const FormAsocSolRemito = () => {

    const [remitos, setRemitos] = useState()
    const [solicitudes, setSolicitudes] = useState()
    
    const [datosAsocSolRemito, setDatosAsocSolRemito]=useState({
        remito: '',
        sol: '',
        m_pago: '',
        contra: '10',
    })

    useEffect(() => {
        //se ejecuta 1 sola vez al ingresar a la página.

        async function obtenerRemitos() {
            var datos_a_enviar={
                'legajo': 'CH1',
                'estado': 'asignado'            
            }
            const res = await getRemitosChoferEstado(datos_a_enviar)
            setRemitos(res.data)
        }
        async function obtenerSolicitudes() {

            const res = await getSolicitudes()
            setSolicitudes(res.data)
        }
        obtenerRemitos()
        obtenerSolicitudes()

    }, []
    )

    const handleInputChange = (event) => {
        setDatosAsocSolRemito({
            ...datosAsocSolRemito,
            [event.target.name]: event.target.value
        })
    }
    const enviarDatosAsocSolRemito = async (event) => {
        event.preventDefault()
        putAsocSolRemito(datosAsocSolRemito)
    }
    return (
        <Fragment>

            <Form id="form_solicitud" onSubmit={enviarDatosAsocSolRemito}>
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <Row>
                            <Col sm={12}>
                                <Form.Group controlId="select_remito">
                                    <Form.Label>Seleccionar remito</Form.Label>
                                    <select id="select_remito" class='form-control' onChange={handleInputChange} name="remito">
                                        <option>***SELECCIONE***</option>
                                        {
                                            remitos ?
                                                remitos.map((remito, i) =>
                                                (
                                                    <option key={i} value={remito}>
                                                        Número Remito: {remito}
                                                    </option>
                                                )
                                                ) : "No hay remitos"
                                        }
                                    </select>
                                </Form.Group>
                            </Col>
                            <Col sm={12}>
                                <Form.Group controlId="select_m_pago">
                                    <Form.Label>Seleccionar forma de pago</Form.Label>
                                    <select id="select_medios_pago" class='form-control' onChange={handleInputChange} name="m_pago">
                                                <option value="default">--</option>
                                                <option value="OR">Pago en Origen</option>
                                                <option value="DES">Pago en Destino</option>
                                                <option value="CC">Pago con Cuenta Corriente</option>
                                            </select>
                                </Form.Group>
                            </Col>
                            <Col sm={12}>
                                <Form.Group controlId="select_solicitud">
                                    <Form.Label>Seleccionar solicitud de transporte</Form.Label>
                                    <select id="select_solicitud" class='form-control' onChange={handleInputChange} name="sol">
                                        <option>***SELECCIONE***</option>
                                        {
                                            solicitudes ?
                                                solicitudes.map((solicitud, i) =>
                                                (
                                                    <option key={i} value={solicitud.id}>
                                                        Solicitud {solicitud.id} (Cliente {solicitud.cliente})
                                                    </option>
                                                )
                                                ) : "No hay solicitudes"
                                        }
                                    </select>
                                </Form.Group>
                            </Col>
                            <Col sm={12}>
                                <Form.Group controlId="valor_estimado">
                                    <Form.Label>Valor estimado</Form.Label>
                                    <Form.Control type="number" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <br></br>
                <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    <Button type="submit" variant="success">Asociar solicitud</Button>{' '}
                </Col>
            </Row>
            </Form>
            <br></br>
            
        </Fragment>
    )
}
export default FormAsocSolRemito;
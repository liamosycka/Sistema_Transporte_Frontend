import React, { useState, useEffect, Fragment } from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import { getSolicitud, getLocalidades , postSolicitud} from '../Services/Solicitud'

import { Nav, NavItem, NavDropdown, MenuItem, Card, Button, Row, Col, Form, Container, Table } from 'react-bootstrap';
const FormSolicitud2 = () => {
    useEffect(() => {
        //se ejecuta 1 sola vez al ingresar a la página.

        async function obtenerLocalidades() {

            const res = await getLocalidades()
            setLocalidades(res.data)
        }
        obtenerLocalidades()

    }, []
    )
    const [localidades, setLocalidades] = useState()
    const [datosSol, setDatosSol] = useState({
        destinatario: '',
        localidad_destinatario: '',
        direccion_destinatario: '',
        fecha: '',
        remitente: '',
        localidad_origen: '',
        direccion_origen: '',
        checkbox_destino: '0',
        checkbox_remitente: '0',


    })
    const [solicitud, setSolicitud] = useState()
    const [contador, setContador] = useState(0)
    const [datosBulto, setDatosBulto]=useState({

    })

    const handleInputChange = (event) => {
        if (event.target.name == 'checkbox_destino') {
            if (event.target.checked) {
                setDatosSol({ ...datosSol, checkbox_destino: '1' })
            } else {
                setDatosSol({ ...datosSol, checkbox_destino: '0' })
            }
        } else {
            if (event.target.name == 'checkbox_remitente') {
                if (event.target.checked) {
                    setDatosSol({ ...datosSol, checkbox_remitente: '1' })
                } else {
                    setDatosSol({ ...datosSol, checkbox_remitente: '0' })
                }
            } else {
                setDatosSol({
                    ...datosSol,
                    [event.target.name]: event.target.value
                })
            }

        }
    }
    const enviarDatosSol = async (event) => {

        event.preventDefault()
        postSolicitud(datosSol)


    }


    return (
        <Fragment>

            <Form id="form_solicitud" onSubmit={enviarDatosSol}>
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <Card>
                            <Card.Header>Destino</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <Row>
                                        <Col sm={8}>
                                            <Form.Group controlId="nombre_destino">
                                                <Form.Label>Nombre del destinatario</Form.Label>
                                                <input id="nombre_destino" type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="destinatario"></input>
                                            </Form.Group>
                                        </Col>
                                        <Col sm={4}>
                                            <Form.Label>Soy el destinatario</Form.Label>
                                            <Form.Group controlId="checkbox_destino">
                                                <input id="checkbox_destino" type="checkbox" name="checkbox_destino" onChange={e => handleInputChange(e)}></input>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>
                                            <Form.Group controlId="localidad_destinatario">
                                                <Form.Label>Localidad</Form.Label>
                                                <select id="localidad_destinatario" class='form-control' onChange={handleInputChange} name="localidad_destinatario">
                                                    <option>***SELECCIONE***</option>
                                                    {
                                                        localidades ?
                                                            localidades.map((loc, i) =>
                                                            (
                                                                <option key={i} value={loc.codigo_postal}>
                                                                    {loc.nombre} ({loc.codigo_postal})
                                                                </option>
                                                            )
                                                            ) : "No hay localidades"
                                                    }
                                                </select>
                                            </Form.Group>
                                        </Col>
                                        <Col sm={6}>
                                            <Form.Group controlId="direccion_destino">
                                                <Form.Label>Dirección</Form.Label>
                                                <input id="direccion_destino" type="text" placeholder="Dirección Destinatario" className="form-control" onChange={handleInputChange} name="direccion_destinatario"></input>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <Card>
                            <Card.Header>Origen</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <Row>
                                        <Col sm={8}>
                                            <Form.Group controlId="nombre_remitente">
                                                <Form.Label>Nombre del remitente</Form.Label>
                                                <input id="nombre_remitente" type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="remitente"></input>
                                            </Form.Group>
                                        </Col>
                                        <Col sm={4}>
                                            <Form.Label>Soy el remitente</Form.Label>
                                            <Form.Group controlId="checkbox_remitente">
                                                <input id="checkbox_remitente" type="checkbox" name="checkbox_remitente" onChange={e => handleInputChange(e)}></input>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>
                                            <Form.Group controlId="localidad_origen">
                                                <Form.Label>Localidad</Form.Label>
                                                <select id="localidad_origen" class='form-control' onChange={handleInputChange} name="localidad_origen">
                                                    <option>***SELECCIONE***</option>
                                                    {
                                                        localidades ?
                                                            localidades.map((loc, i) =>
                                                            (
                                                                <option key={i} value={loc.codigo_postal}>
                                                                    {loc.nombre} ({loc.codigo_postal})
                                                                    
                                                                </option>
                                                            )
                                                            ) : "No hay localidades"
                                                    }
                                                </select>
                                            </Form.Group>
                                        </Col>
                                        <Col sm={6}>
                                            <Form.Group controlId="direccion_origen">
                                                <Form.Label>Dirección</Form.Label>
                                                <input id="direccion_origen" type="text" placeholder="Dirección Remitente" className="form-control" onChange={handleInputChange} name="direccion_origen"></input>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <Button type="submit" variant="success">Pre-Carga de Solicitud</Button>{' '}
                    </Col>
                </Row>

            </Form>
            

        </Fragment>
    )
}
export default FormSolicitud2;
import React, { useState, useEffect, Fragment } from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import { postBulto } from '../Services/Solicitud'

import { Nav, NavItem, NavDropdown, MenuItem, Card, Button, Row, Col, Form, Container, Table } from 'react-bootstrap';

const FormBultos = () => {
    const [datosBulto, setDatosBulto] = useState({
        peso: '',
        tipo: '',
        descripcion: '',
        valor_flete: '',
        solicitud: '',
    })

    const handleInputChange = (event) => {
        setDatosBulto({
            ...datosBulto,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatosBulto = async (event) => {
        //datosBulto.valor_flete=calcularValorFlete()
        event.preventDefault()
        datosBulto.valor_flete=500
        postBulto(datosBulto)
    }

    const checkDatosBulto = () => {
        console.log("Estado de bulto-tipo: " + datosBulto.tipo)
        console.log("Estado de bulto-peso: " + datosBulto.peso)
        console.log("Estado de bulto-descrip: " + datosBulto.descripcion)
        console.log("Estado de bulto-sol: " + datosBulto.solicitud)
    }

    return (
        <Form id="form_bultos" onSubmit={enviarDatosBulto}>
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    <Card>
                        <Card.Header>Bultos</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <Row>
                                    <Col sm={6}>
                                        <Form.Group controlId="nombre_destino">
                                            <Form.Label>Tipo de paquete</Form.Label>
                                            <select id="tipos_bulto" class='form-control' onChange={handleInputChange} name="tipo">
                                                <option value="default">--</option>
                                                <option value="CH">Menos de 5kg</option>
                                                <option value="M">Entre 5 y 10 kg</option>
                                                <option value="G">Mas de 10 kg</option>
                                            </select>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group controlId="peso">
                                            <Form.Label>Peso</Form.Label>
                                            <input id="peso" type="text" placeholder="Peso del bulto" className="form-control" onChange={handleInputChange} name="peso"></input>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={6}>
                                        <Form.Group controlId="descripcion">
                                            <Form.Label>Descripción</Form.Label>
                                            <input id="descripcion" type="text" placeholder="Descripcion" className="form-control" onChange={handleInputChange} name="descripcion"></input>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group controlId="solicitud">
                                            <Form.Label>Solicitud de Transporte</Form.Label>
                                            <input id="solicitud" type="text" placeholder="ID de Solicitud" className="form-control" onChange={handleInputChange} name="solicitud"></input>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={4}>
                                        <br></br>
                                        <Button type="submit" variant="info" id="btn_bulto">+ Agregar bulto</Button>{' '}
                                    </Col>
                                </Row>
                                <Row>
                                <Col sm={12}>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Tipo</th>
                                            <th>Descripcion</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tabla_bultos">
                                        <tr>
                                            <td>{datosBulto.tipo? datosBulto.tipo:""}</td>
                                            <td>{datosBulto.descripcion? datosBulto.descripcion:""}</td>
                                        </tr>
                                        <tr>
                                            <td>{datosBulto.tipo? datosBulto.tipo:""}</td>
                                            <td>{datosBulto.descripcion? datosBulto.descripcion:""}</td>
                                        </tr>
                                        <tr>
                                            <td>{datosBulto.tipo? datosBulto.tipo:""}</td>
                                            <td>{datosBulto.descripcion? datosBulto.descripcion:""}</td>
                                        </tr>
                                        <tr>
                                            <td>{datosBulto.tipo? datosBulto.tipo:""}</td>
                                            <td>{datosBulto.descripcion? datosBulto.descripcion:""}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Form>
    )
}
export default FormBultos;
import React, { useState, useEffect, Fragment } from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import { getSolicitud, getLocalidades , postSolicitud} from '../Services/Solicitud'

import { Nav, NavItem, NavDropdown, MenuItem, Card, Button, Row, Col, Form, Container, Table } from 'react-bootstrap';

const FormBultos =()=>{


    return(
        <Form id="form_bultos">
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <Card>
                            <Card.Header>Bultos</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <Row>
                                        <Col sm={8}>
                                            <Form.Group controlId="nombre_destino">
                                                <Form.Label>Tipo de paquete</Form.Label>
                                                <Form.Select aria-label="Default select example">
                                                    <option value="0">Menos de 5kg</option>
                                                    <option value="1">Entre 5 y 10 kg</option>
                                                    <option value="2">Mas de 10 kg</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col sm={4}>
                                            <br></br>
                                            <Button variant="info" id="btn_bulto">+ Agregar bulto</Button>{' '}
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
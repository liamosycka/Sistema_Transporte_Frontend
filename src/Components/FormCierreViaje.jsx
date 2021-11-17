import React, { useState, useEffect, Fragment } from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import { getSolicitud, getLocalidades, postSolicitud } from '../Services/Solicitud'

import { Nav, NavItem, NavDropdown, MenuItem, Card, Button, Row, Col, Form, Container, Table } from 'react-bootstrap';
const FormCierreViaje = () => {
    return (
        <Fragment>
            <Form id="form_solicitud">
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <Row>
                            <Col sm={10}>
                                <Form.Group controlId="select_fecha_cerrar">
                                    <Form.Label>Fecha del viaje</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </Col>
                            <Col sm={2}>
                                <Form.Label>&nbsp;</Form.Label>
                                <Button variant="primary">Buscar</Button>{' '}
                            </Col>
                            <Col sm={12}>
                                <Form.Group controlId="select_viaje_cerrar">
                                    <Form.Label>Seleccionar viaje</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Form.Label>&nbsp;</Form.Label>
                            <Col sm={12}>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Remito</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tabla_remitos">
                                        <tr>
                                            <td>Remito 1</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Form>,
            <br></br>
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    <Button variant="success">Cerrar viaje</Button>{' '}
                </Col>
            </Row>
        </Fragment>
    )
}
export default FormCierreViaje
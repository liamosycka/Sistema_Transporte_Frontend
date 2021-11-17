import React, { useState, useEffect, Fragment } from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import { getSolicitud, getLocalidades, postSolicitud } from '../Services/Solicitud'

import { Nav, NavItem, NavDropdown, MenuItem, Card, Button, Row, Col, Form, Container, Table } from 'react-bootstrap';

const FormAsocSolRemito = () => {

    return (
        <Fragment>

            <Form id="form_solicitud">
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <Row>
                            <Col sm={12}>
                                <Form.Group controlId="select_remito_sol">
                                    <Form.Label>Seleccionar remito</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col sm={12}>
                                <Form.Group controlId="select_f_pago">
                                    <Form.Label>Seleccionar forma de pago</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col sm={12}>
                                <Form.Group controlId="select_solicitud">
                                    <Form.Label>Seleccionar solicitud de transporte</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                    </Form.Select>
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
            </Form>,
            <br></br>
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    <Button variant="success">Asociar solicitud</Button>{' '}
                </Col>
            </Row>
        </Fragment>
    )
}
export default FormAsocSolRemito;
import React, { useState, useEffect, Fragment } from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import { getSolicitud, getLocalidades, postSolicitud } from '../Services/Solicitud'

import { Nav, NavItem, NavDropdown, MenuItem, Card, Button, Row, Col, Form, Container, Table } from 'react-bootstrap';

const FormAsocRemitosViaje = () => {
  return (
    <Fragment>


      <Form id="form_solicitud">
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <Row>
              <Col sm={12}>
                <Form.Group controlId="nombre_destino">
                  <Form.Label>Seleccionar fecha</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <Form.Group controlId="select_viaje">
                  <Form.Label>Seleccionar viaje</Form.Label>
                  <Form.Select aria-label="Default select example">
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col sm={12}>
                <Form.Group controlId="select_remito">
                  <Form.Label>Seleccionar remito</Form.Label>
                  <Form.Select aria-label="Default select example">
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>,
      <br></br>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <Col md={4}>
            <Button variant="success">Completar viaje</Button>{' '}
            <Button variant="danger">Completar viaje</Button>{' '}
          </Col>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <Button variant="success">Completar viaje</Button>{' '}
        </Col>
      </Row>
    </Fragment>
  )
}
export default FormAsocRemitosViaje;
import React, { useState, useEffect, Fragment } from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import { getSolicitud, getLocalidades , postSolicitud} from '../Services/Solicitud'
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavDropdown, MenuItem, Card, Button, Row, Col, Form, Container, Table } from 'react-bootstrap';
const MenuOpciones =()=>{
    return(
        <Card className="text-center">
                <Card.Body>
    <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <Row>
            <Col>
              <Card className="text-center">
                <Card.Body>
                  <Card.Text>
                    <h2>Crear solicitud<br></br> de transporte</h2>
                    <br></br>
                  </Card.Text>
                  <Link to="/altaSolicitud">
                            <Button color="inherit">Ingresar</Button>
                        </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-center">
                <Card.Body>
                  <Card.Text>
                    <h2>Asociar solicitud<br></br> a remito</h2>
                    <br></br>
                  </Card.Text>
                  <Link to="/asocSolRemito">
                            <Button color="inherit">Ingresar</Button>
                        </Link>
                </Card.Body>
              </Card>
            </Col>
            <br></br>
          </Row>
          <br></br>
          <Row>
            <Col>
              <Card className="text-center">
                <Card.Body>
                  <Card.Text>
                    <h2>Asociar remito<br></br> a viaje</h2>
                    <br></br>
                  </Card.Text>
                  <Link to="/asocRemitosViaje">
                            <Button color="inherit">Ingresar</Button>
                        </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-center">
                <Card.Body>
                  <Card.Text>
                    <h2>Cerrar<br></br> viaje</h2>
                    <br></br>
                  </Card.Text>
                  <Link to="/cierreViaje">
                            <Button color="inherit">Ingresar</Button>
                        </Link>
                </Card.Body>
              </Card>
            </Col>
            <br></br>
          </Row>
          <br></br>
          <Row>
            <Col>
              <Card className="text-center">
                <Card.Body>
                  <Card.Text>
                    <h2>Calendario de<br></br> eventos</h2>
                    <br></br>
                  </Card.Text>
                  <Link to="/calendar">
                            <Button color="inherit">Ingresar</Button>
                        </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-center">
                <Card.Body>
                  <Card.Text>
                    <h2>El servicio<br></br> a consumir</h2>
                    <br></br>
                  </Card.Text>
                  <Link to="/calendar">
                            <Button color="inherit">Ingresar</Button>
                        </Link>
                </Card.Body>
              </Card>
            </Col>
            <br></br>
          </Row>
        </Col>
      </Row>
      </Card.Body>
      </Card>
      )
}
export default MenuOpciones;
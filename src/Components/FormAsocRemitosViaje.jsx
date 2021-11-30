import React, { useState, useEffect, Fragment } from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import { getRemitosViaje } from '../Services/Remito'
import { getViajesFecha, putRemitosViaje } from '../Services/Viaje'

import { Nav, NavItem, NavDropdown, MenuItem, Card, Button, Row, Col, Form, Container, Table } from 'react-bootstrap';

const FormAsocRemitosViaje = () => {

  const [datosAsocRemitosViaje, setDatosAsocRemitosViaje] = useState({
    fecha_viaje: '',
    viaje: '',
    remito: '',

  })
  const [arrRemitos, setArrRemitos] = useState([])
  const [viajes, setViajes] = useState()
  const [remitos, setRemitos] = useState()

  //se ejecuta 1 sola vez al ingresar a la página.

  async function obtenerRemitosViaje(id_viaje) {
    const res = await getRemitosViaje(id_viaje)
    setRemitos(res.data)
  }

  async function obtenerViajesFecha(fecha) {
    const res = await getViajesFecha(fecha)
    setViajes(res.data)
  }

  const handleInputChange = (event) => {
    setDatosAsocRemitosViaje({
      ...datosAsocRemitosViaje,
      [event.target.name]: event.target.value
    })
    if (event.target.name == 'fecha_viaje') {
      obtenerViajesFecha(event.target.value)
    }
    if (event.target.name == 'viaje') {
      obtenerRemitosViaje(event.target.value)
    }
  }

  const agregarRemito = () => {
    console.log("En ag remito")
    let newArr = [...arrRemitos];
    newArr.push(datosAsocRemitosViaje.remito)
    setArrRemitos(newArr);
    console.log("Como es?" + arrRemitos[0] ? arrRemitos[0] : "")
  }

  const enviarDatosAsocRemitosViaje = async () => {
    putRemitosViaje(arrRemitos, datosAsocRemitosViaje.viaje)
  }
  return (
    <Fragment>


      <Form id="form_asocRemitosViaje" onSubmit={enviarDatosAsocRemitosViaje}>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <Row>
              <Col sm={12}>
                <Form.Group controlId="fecha_viaje">
                  <Form.Label>Seleccionar fecha</Form.Label>
                  <input id="fecha_viaje" type="date" class="form-control" name="fecha_viaje" onChange={e => handleInputChange(e)}></input>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <Form.Group controlId="select_viaje">
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
            </Row>
          </Col>
        </Row>

        <br></br>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <Button onClick={agregarRemito} variant="primary">Agregar Remito</Button>{' '}
          </Col>
        </Row>
        <br></br>
        <Card>
          <Card.Body>
            <Card.Text>
              <Row>
                <Col sm={12}>
                  <Table striped bordered hover >
                    <thead>
                      <tr>
                        <th>Remito</th>

                      </tr>
                    </thead>
                    <tbody id="tabla_remitos">
                      <tr>
                        <td>{arrRemitos[0] ? arrRemitos[0] : ""}</td>
                      </tr>
                      <tr>
                        <td>{arrRemitos[1] ? arrRemitos[1] : ""}</td>
                      </tr>
                      <tr>
                        <td>{arrRemitos[2] ? arrRemitos[2] : ""}</td>
                      </tr>
                      <tr>
                        <td>{arrRemitos[3] ? arrRemitos[3] : ""}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>


        <br></br>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <Button type="submit" variant="success">Completar Viaje</Button>{' '}
          </Col>
        </Row>
      </Form>
    </Fragment>
  )
}
export default FormAsocRemitosViaje;
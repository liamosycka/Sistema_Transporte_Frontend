import './App.css';
import React, { useState, useEffect, Fragment } from 'react'
import { Button, Form } from 'react-bootstrap'
import { getSolicitud, getLocalidades } from './Services/Solicitud'
import 'bootstrap/dist/css/bootstrap.min.css';
//Importar Componentes
import MostrarLocalidades from './Components/MostrarLocalidades'
import NavBar from './Components/NavBar'
//Fin Componentes

function App() {

  var gapi=window.gapi
  var CLIENT_ID="198772170824-pamhjldp529hje6ocisahaa6ci6mvsto.apps.googleusercontent.com"
  var API_KEY="AIzaSyCkvR9CjVOTk23hayO5azH2_DArjjcFVic"
  var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
  var SCOPES = "https://www.googleapis.com/auth/calendar";
        // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
  


  const [nombre, setNombre] = useState("Nombre_X")
  const [solicitud, setSolicitud] = useState()
  const [localidades, setLocalidades] = useState()

  // Authorization scopes required by the API; multiple scopes can be
  // included, separated by spaces.

  useEffect(() => {
    //se ejecuta 1 sola vez al ingresar a la página.
    
    async function obtenerLocalidades() {

      const res = await getLocalidades()
      console.log(res)
      setLocalidades(res.data)
    }
    obtenerLocalidades()
    
  }, []

  )
  const obtenerSolicitud = async (id_sol) => {
    const res = await getSolicitud(id_sol)
    setSolicitud(res.data)
  }

  const agregarEvento= ()=>{
    console.log("en agregar evento")
    gapi.load('client:auth2', ()=>{
      console.log('loaded client')

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })

      gapi.client.load('calendar', 'v3', ()=> console.log('lets go!'))

      gapi.auth2.getAuthInstance().signIn().then(()=>{
        var event = {
          'summary': 'Viaje a Rincón',
          'location': '800 Howard St., San Francisco, CA 94103',
          'description': 'A chance to hear more about Google\'s developer products.',
          'start': {
            'dateTime': '2021-11-5T09:00:00-07:00',
            'timeZone': 'America/Los_Angeles'
          },
          'end': {
            'dateTime': '2021-11-5T09:00:00-10:00',
            'timeZone': 'America/Los_Angeles'
          },
          'recurrence': [
            'RRULE:FREQ=DAILY;COUNT=2'
          ],
          'attendees': [
            {'email': 'lpage@example.com'},
            {'email': 'sbrin@example.com'}
          ],
          'reminders': {
            'useDefault': false,
            'overrides': [
              {'method': 'email', 'minutes': 24 * 60},
              {'method': 'popup', 'minutes': 10}
            ]
          }
        };

        var request = gapi.client.calendar.events.insert({
          'calendarId': 'primary',
          'resource': event
        })
        request.execute(event =>{
          window.open(event.htmlLink)
        })
      })
      
    })
  }


  return (
    <Fragment>
      <NavBar />
      <Button onClick={() => obtenerSolicitud("S3")}>
        Tocar
      </Button>
      <p>Solicitud: {solicitud ? solicitud.destinatario : " No hay Solicitud"}</p>
      <select>
        <option>***SELECCIONE***</option>
        {
          localidades ?
            localidades.map((loc, i) =>
            (
              <option key={i}>
                Código postal: {loc.codigo_postal}
                Nombre: {loc.nombre}
              </option>
            )
            ) : "No hay localidades"
        }
      </select>
      <MostrarLocalidades solicitud={solicitud} codigo={localidades ? localidades[0].codigo_postal : ""} />
      <MostrarLocalidades solicitud={solicitud} codigo={localidades ? localidades[0].codigo_postal : ""} />


      <>
        <Form.Control size="lg" type="text" placeholder="Large text" />
        <br />
        <Form.Control type="text" placeholder="Normal text" />
        <br />
        <Form.Control size="sm" type="text" placeholder="Small text" />
      </>
    <Button onClick={()=> agregarEvento()}>Agregar Evento a Calendar</Button>
    </Fragment>

    
  );
}

export default App;

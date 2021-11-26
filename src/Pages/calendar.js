import React, { Fragment, useState, useEffect } from 'react';
import { Button, Form, Row, Col, } from 'react-bootstrap';
import EventInfo from '../Components/EventInfo'
import Container from '@mui/material/Box';
function Calendar() {
    var gapi = window.gapi;
    var CLIENT_ID = process.env.REACT_APP_GAPI_CLIENT_ID;
    var API_KEY = process.env.REACT_APP_GAPI_KEY;
    var DISCOVERY_DOCS = process.env.REACT_APP_GAPI_DISCOVERY
    var SCOPES = process.env.REACT_APP_GAPI_SCOPES

    const [eventos, setEventos] = useState("Ningun evento")

    const agregarEvento = () => {
        gapi.load('client:auth2', () => {

            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES,
            })

            gapi.client.load('calendar', 'v3', () => console.log('cliente cargado'))

            gapi.auth2.getAuthInstance().signIn().then(() => {
                var event = {
                    'summary': 'Viaje a Allen',
                    'location': 'Ruta X',
                    'description': 'Viaje programado del Chofer CHXX',
                    'start': {
                        'dateTime': '2021-11-19T09:00:00-07:00',
                        'timeZone': 'America/Los_Angeles'
                    },
                    'end': {
                        'dateTime': '2021-11-19T09:00:00-10:00',
                        'timeZone': 'America/Los_Angeles'
                    },
                    'recurrence': [
                        'RRULE:FREQ=DAILY;COUNT=2'
                    ],
                    'attendees': [
                        { 'email': 'chofer@example.com' }
                    ],
                    'reminders': {
                        'useDefault': false,
                        'overrides': [
                            { 'method': 'email', 'minutes': 24 * 60 },
                            { 'method': 'popup', 'minutes': 10 }
                        ]
                    }
                };

                var request = gapi.client.calendar.events.insert({
                    'calendarId': 'primary',
                    'resource': event
                })
                request.execute(event => {
                    window.open(event.htmlLink)
                })


            })

        })
    }

    const getEventos = () => {
        gapi.load('client:auth2', () => {
            console.log('loaded client')

            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES,
            })

            gapi.client.load('calendar', 'v3', () => console.log('lets go!'))

            gapi.auth2.getAuthInstance().signIn().then(() => {
                console.log("antes del list")

                gapi.client.calendar.events.list({
                    'calendarId': 'primary',
                    'maxResults': 10,
                    'timeMin': (new Date()).toISOString(),
                    'showDeleted': false,
                    'singleEvents': true,
                    'orderBy': 'startTime'
                }).then(response => {
                    console.log("en el then de response")
                    const events = response.result.items
                    setEventos(events)
                    const result = response.result
                    const respuesta = response

                })
            })
        })
    }

    const generarEventsInfo = () => {
        for (var i = 0; i < eventos.length; i++) {
            var event = eventos[i];
            var start = event.start.dateTime || event.start.date;
            console.log('%s - %s', start, event.summary);
        }
    }
    return (
        <Fragment>
            <Container sx={{
                border: 3,
                borderColor: 'primary.main', mt: 1, ml: 4, mr: 4,
                mb: 1, borderRadius: 2, boxShadow: 1,
                bgcolor: 'primary.main', p: 3,
                color: 'white'
            }}>
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <Col md={{ span: 6 }}>
                            <Button onClick={() => agregarEvento()}>Agregar Evento a Calendar</Button>
                        
                        
                            <Button onClick={() => getEventos()}>Obtener Eventos</Button>
                        </Col>

                        <br></br>
                        <EventInfo evento={eventos ? eventos[0] : ""} />
                        <br></br>
                        <EventInfo evento={eventos ? eventos[1] : ""} />
                        <br></br>
                        <EventInfo evento={eventos ? eventos[2] : ""} />
                        <br></br>
                        <EventInfo evento={eventos ? eventos[3] : ""} />
                        <br></br>
                        <EventInfo evento={eventos ? eventos[4] : ""} />
                        <br></br>
                        <EventInfo evento={eventos ? eventos[5] : ""} />
                        <br></br>
                    </Col>

                </Row>
            </Container>
        </Fragment>
    )
}
export default Calendar;
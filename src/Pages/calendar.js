import React from 'react';
import { Button, Form } from 'react-bootstrap';

function Calendar() {
    var gapi = window.gapi;
    var CLIENT_ID = process.env.REACT_APP_GAPI_CLIENT_ID;
    var API_KEY = process.env.REACT_APP_GAPI_KEY;
    var DISCOVERY_DOCS = process.env.REACT_APP_GAPI_DISCOVERY
    var SCOPES = process.env.REACT_APP_GAPI_SCOPES
    // Authorization scopes required by the API; multiple scopes can be
    // included, separated by spaces.
    const agregarEvento = () => {
        console.log("en agregar evento")
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
                var event = {
                    'summary': 'Viaje a Rincón',
                    'location': '800 Howard St., San Francisco, CA 94103',
                    'description': 'A chance to hear more about Google\'s developer products.',
                    'start': {
                        'dateTime': '2021-11-12T09:00:00-07:00',
                        'timeZone': 'America/Los_Angeles'
                    },
                    'end': {
                        'dateTime': '2021-12-5T09:00:00-10:00',
                        'timeZone': 'America/Los_Angeles'
                    },
                    'recurrence': [
                        'RRULE:FREQ=DAILY;COUNT=2'
                    ],
                    'attendees': [
                        { 'email': 'lpage@example.com' },
                        { 'email': 'sbrin@example.com' }
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
    return (
        <Button onClick={() => agregarEvento()}>Agregar Evento a Calendar</Button>
    )
}
export default Calendar;
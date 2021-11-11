import React, { Fragment, useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const EventInfo = (props) => {
    const [event, setEvent] = useState("Sin Evento");
    const cargarEvento= ()=>{
        setEvent(props.evento ? props.evento.summary: "Todavía no hay Evento")
    }
    return (
        <Fragment>
            <Stack spacing={2} direction="row">
                <Card variant="outlined" sx={{ maxWidth: 345 }}>
                    <CardContent>
                        {props.evento ? props.evento.summary : " No hay Evento todavia "}
                        {props.evento.start ? props.evento.start.dateTime : " No hay Evento todavia "}
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>{event}</CardContent>
                </Card>
                <Button variant="contained" onClick={() => cargarEvento()}>  
                    Agregar Evento a Tarjeta 
                </Button>
            </Stack>
        </Fragment>
    )
}

export default EventInfo;
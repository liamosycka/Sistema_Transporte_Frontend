import React, { Fragment, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
const EventInfo = (props) => {

    return (
        <Fragment>
            <Stack spacing={2} direction="row">
                <Card variant="outlined" sx={{ maxWidth: 345 }}>
                    <CardContent>
                        {props.evento ? props.evento.summary : " No hay Evento todavia "}
                        {props.evento.start ? props.evento.start.date : " No hay Evento todavia "}
                    </CardContent>
                </Card>
                
            </Stack>
        </Fragment>
    )
}

export default EventInfo;
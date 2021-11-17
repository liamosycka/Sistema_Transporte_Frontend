import axios from "axios"
import config from './Config/config.json'

const nuevoCliente = () => {
    return axios.create({
        baseURL: config.baseURL,
        timeout: config.timeout,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
}

export const getSolicitud = async (id_solicitud) => {
    console.log("en serivicio get Sol: " + id_solicitud)
    try {
        const cliente = nuevoCliente();
        const response = await cliente.get('solicitudes/' + id_solicitud + '/')
        if (response.status === 200) {
            return response;
        }
    }
    catch (e) {
        console.error(e)
    }
}

export const postSolicitud = async (datosSol) => {
    console.log("en post SOl: " + datosSol.destinatario)
    try {
        const cliente = nuevoCliente();
        const id_cliente = "C1";
        var datos_a_enviar={}
        if (datosSol.checkbox_destino == '1') {
            datos_a_enviar = {
                'direccion': datosSol.direccion_origen,
                'localidad': datosSol.localidad_origen,
                'nombre_2': datosSol.remitente
            };

        } else {
            datos_a_enviar = {
                'direccion': datosSol.direccion_destinatario,
                'localidad': datosSol.localidad_destinatario,
                'nombre_2': datosSol.destinatario
            };
        }
        const response = await cliente.post('solicitudes/alta/' + id_cliente + '/' + parseInt(datosSol.checkbox_destino) + '/', datos_a_enviar)
    } catch (e) {
        console.error(e)
    }
}

export const getLocalidades = async () => {
    try {
        const cliente = nuevoCliente();
        const response = await cliente.get('/localidades/')
        if (response.status === 200) {
            return response;
        }
    }
    catch (e) {
        console.error(e)
    }
}

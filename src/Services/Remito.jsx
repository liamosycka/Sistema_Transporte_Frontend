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

export const getRemitosChoferEstado = async (datosRemitosChofer) => {
    try {
        const cliente = nuevoCliente();
        const response = await cliente.get('remitos/chofer-estado/'+
        datosRemitosChofer.legajo+'/'+datosRemitosChofer.estado+'/')
        if (response.status === 200 ||response.status === 301) {
            return response;
        }
    }
    catch (e) {
        console.error(e)
    }
}


export const putAsocSolRemito = async (datosAsocSolRemito) => {
    try {
        const cliente = nuevoCliente();
        const response = await cliente.put('remitos/asoc-sol-remito/', datosAsocSolRemito)
        if (response.status === 200 ||response.status === 301) {
            return response;
        }
    }
    catch (e) {
        console.error(e)
    }
}

export const getRemitosViaje = async (idViaje)=>{
    try {
        const cliente = nuevoCliente();
        const response = await cliente.get('remitos/viaje/'+idViaje+'/')
        if (response.status === 200 ||response.status === 301) {
            return response;
        }
    }
    catch (e) {
        console.error(e)
    }
}


import axios from "axios"
import config from './Config/config.json'

const nuevoCliente =()=>{
    return axios.create({
        baseURL: config.baseURL,
        timeout: config.timeout,
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
}

export const getSolicitud= async(id_solicitud)=>{
    try{
        const cliente=nuevoCliente();
        const response=await cliente.get('solicitudes/'+id_solicitud+'/')
        if (response.status===200){
            return response;
        }
    }
    catch (e){
        console.error(e)
    }
}


export const getLocalidades= async()=>{
    try{
        const cliente=nuevoCliente();
        const response=await cliente.get('/localidades/')
        if (response.status===200){
            return response;
        }
    }
    catch (e){
        console.error(e)
    }
}

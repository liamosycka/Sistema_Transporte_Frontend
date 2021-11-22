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

export const getViajesFecha = async (fecha) => {
    try {
        const cliente = nuevoCliente();
        const response = await cliente.get('viajes/'+fecha+'/')
        if (response.status === 200 ||response.status === 301) {
            return response;
        }
    }
    catch (e) {
        console.error(e)
    }
}

export const putRemitosViaje = async(arrRemitos, id_viaje)=>{
    console.log("En putRemitosViaje")
    console.log("ArrR: "+arrRemitos[0])
    console.log("id_v "+id_viaje)
    try {
        var remitos=[]
        const cliente = nuevoCliente();
        var i=0
        for (i =0; i<arrRemitos.length();i++){
            remitos.push(arrRemitos[i])
            console.log("Remitos en for: "+remitos[i])
        }
        
        const response = await cliente.put('viajes/asoc-remitos-viaje/'+parseInt(id_viaje)+'/', remitos)
        if (response.status === 200 ||response.status === 301) {
            return response;
        }
    }
    catch (e) {
        console.error(e)
    }
}


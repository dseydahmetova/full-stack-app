import { customAxios } from './api'


export async function getAPIPlaces() {
    const axios = customAxios()
    try {
        const response = await axios.get('/places/seed')
        return response.data
    } catch(err) {
        console.log(err.message)
        return []
    }
}


export async function getAllPlaces() {
    const axios = customAxios()
    try {
        const response = await axios.get('/places')
        return response.data
    } catch(err) {
        console.log(err.message)
        return []
    }
}


export async function getPlace(id) {
    const axios = customAxios()
    try {
        const response = await axios.get(`/places/${id}`)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}
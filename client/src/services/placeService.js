import { customAxios, customAxiosWithAuth } from './api'


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

export async function deletePlace(id) {
    const axios = customAxiosWithAuth()
    try {
        await axios.delete(`/places/${id}`)
    } catch(err) {
        console.log(err.message)
    }
}

export async function createPlace(place) {
    const axios = customAxiosWithAuth()
    try {
        const response = await axios.post('/places', place)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}

export async function likePlace(id) {
    const axios = customAxiosWithAuth()
    try {
        await axios.put(`/places/${id}/likePlace`)
    } catch(err) {
        console.log(err)
    }
}


export async function updatePlace(id, place) {
    const axios = customAxiosWithAuth()
    try {
        await axios.put(`/places/${id}`, place)
    } catch(err) {
        console.log(err.message)
    }
}

export async function savePlace( userId, placeId) {
    const axios = customAxiosWithAuth()
    try {
        await axios.put(`/places`, {userId, placeId})
    } catch(err) {
        console.log(err)
    }
}
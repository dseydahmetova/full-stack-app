import { customAxios, customAxiosWithAuth } from './api'


// get all places from API and save it to Mongo DB
export async function getAPIPlaces(page) {
    const axios = customAxios()
    try {
        const response = await axios.get('/places/seed', {page})
        return response.data
    } catch(err) {
        console.log(err.message)
        return []
    }
}

// get all places from Mongo DB
export async function getAllPlaces(page) {
    const axios = customAxios()
    try {
        const response = await axios.get(`/places?page=${page}`)
        return {

            places: response.data.data,
            currentPage: response.data.currentPage,
            totalnumberOfPages: response.data.totalnumberOfPages
        }
    } catch(err) {
        console.log(err.message)
        return []
    }
}

// filter all places by searchquery
export async function getSearchPlace( searchQuery) {
    const axios = customAxiosWithAuth()
    try {
        const response = await axios.get(`/places/search?searchQuery=${searchQuery || 'none'}`)
        console.log('service res', response.data.place)
        return {places: response.data.place}
    } catch(err) {
        console.log(err)
    }
}

// get all ids in saved places 
export async function getSavedPlacesIds( userId) {
    const axios = customAxiosWithAuth()
    try {
        const response = await axios.get(`/places/savedPlaces/ids/${userId}`)
        return  response.data
           
    } catch(err) {
        console.log(err)
    }
}

// get all saved places 
export async function getSavedPlaces( userId) {
    const axios = customAxiosWithAuth()
    try {
        const response = await axios.get(`/places/savedPlaces/${userId}`)
        return {savedPlaces: response.data.savedPlaces}
           
    } catch(err) {
        console.log(err)
    }
}

// get all saved places 
export async function deleteSavedPlace( userId, placeId) {
   
    const axios = customAxiosWithAuth()
    try {
        await axios.delete(`/places/savedPlaces/${userId}/${placeId}`)
    } catch(err) {
        console.log(err.message)
    }
}


// show a single place by id
export async function getPlace(id) {
    const axios = customAxios()
    try {
        const response = await axios.get(`/places/${id}`)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}

// delete a place by id
export async function deletePlace(id) {
    const axios = customAxiosWithAuth()
    try {
        const response = await axios.delete(`/places/${id}`)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}


// create a new place
export async function createPlace(place) {
    const axios = customAxiosWithAuth()
    try {
        const response = await axios.post('/places', place)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}


// like the place
export async function likePlace(id) {
    const axios = customAxiosWithAuth()
    try {
         await axios.put(`/places/${id}/likePlace`)
    } catch(err) {
        console.log(err)
    }
}

// edit and update the place
export async function updatePlace(id, place) {
    const axios = customAxiosWithAuth()
    try {
      await axios.put(`/places/${id}`, place)
        return 
    } catch(err) {
        console.log(err.message)
    }
}

//save the place to users page
export async function savePlace( userId, placeId) {
    const axios = customAxiosWithAuth()
    try {
        await axios.put(`/places`, {userId, placeId})
    } catch(err) {
        console.log(err)
    }
}
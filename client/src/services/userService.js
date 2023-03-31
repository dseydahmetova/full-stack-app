import {customAxios, customAxiosWithAuth} from './api'

export async function userLogin(user) {
    const axios = customAxios()
    try{
        const response = await axios.post('/auth/login', user)
        return response.data.token
    }catch(err){
        console.log(err)
        alert(err.response?.data?.error)
    }
}

export async function userRegister(user) {
    const axios = customAxios()
    try {
        const response = await axios.post('/auth/register', user)
        return response.data.token
    } catch(err) {
        console.log(err)
        alert(err.response?.data?.error)
    }
}

export async function userInfo() {
    const axios = customAxiosWithAuth()
    try {
        const response = await axios.get('/users')
        return response.data
    } catch(err) {
        console.log(err)
        localStorage.removeItem("token")
        alert(err.response?.data?.error)
        return {}
    }
}

export async function deleteUser(id) {
    const axios = customAxiosWithAuth()
    try {
        await axios.delete(`/users/${id}`)
    } catch(err) {
        console.log(err.message)
    }
}

export async function updateUser(id, user) {
    const axios = customAxiosWithAuth()
    try {
        await axios.put(`/users/${id}`, user)
    } catch(err) {
        console.log(err.message)
    }
}
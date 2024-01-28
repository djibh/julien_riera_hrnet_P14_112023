import axios from 'axios'
import { Department } from '../types'

const API_URL = 'http://127.0.0.1:5000/api'

export async function getDepartments() {
    return axios.get(`${API_URL}/departments`)
}

export async function saveDepartment(department: Department) {
    return await axios.post(`${API_URL}/department`, department).then(response => response.data)
}
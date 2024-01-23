import axios from 'axios'
import { Employee } from '@/types'

const API_URL = 'http://localhost:5000/api'

export async function getEmployees() {
    return axios.get(`${API_URL}/employees`)
}

export async function saveEmployee(employee: Employee) {
    return await axios.post(`${API_URL}/employee`, employee).then(response => response.data)
}
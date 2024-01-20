import axios from 'axios'
import { Employee } from '../shared/lib/types'

const API_URL = 'http://localhost:5000/api'

export async function getEmployees() {
    return axios.get(`${API_URL}/employees`)
}

export async function saveEmployee(employee: Employee) {
    return axios.post(`${API_URL}/employee`, employee)
}

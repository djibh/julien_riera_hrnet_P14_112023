import axios from 'axios'
import { Patient } from '../../types'

const API_URL = 'http://localhost:5000/api'

export async function getPatients() {
    return axios.get(`${API_URL}/patients`)
}

export async function savePatient(patient: Patient) {
    return await axios.post(`${API_URL}/patient`, patient).then(response => response.data)
}
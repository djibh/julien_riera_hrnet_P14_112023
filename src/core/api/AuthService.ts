import axios from 'axios'
import { User } from '../../types'

const API_URL = 'http://localhost:5000/api'

export async function logUserIn(user: User) {
    return await axios.post(`${API_URL}/login`, user).then(response => response.data)
}
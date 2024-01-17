import { Employee } from "../data/employees";
import useEmployees from "./useEmployees";

export default function usePost() {
    const postEmployee = async (employee: Employee) => {
        try {
            const response = await fetch('http://localhost:5000/api/employee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(employee),
            });
    
            if (!response.ok) {
            throw new Error('There is a problem with this request. Check status code.');
            }
    
            const result = await response.json();
            console.log('POST response:', result);
            useEmployees
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }  
    
    return { postEmployee }
}
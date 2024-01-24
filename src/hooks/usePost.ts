import { Patient } from "../types";
import usePatients from "./usePatients";

export default function usePost() {
    const postPatient = async (Patient: Patient) => {
        try {
            const response = await fetch('http://localhost:5000/api/Patient', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(Patient),
            });

            if (!response.ok) {
                throw new Error('There is a problem with this request. Check status code.');
            }

            const result = await response.json();
            console.log('POST response:', result);
            usePatients
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }

    return { postPatient }
}
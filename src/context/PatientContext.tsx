import { createContext } from "react";
// import axios from 'axios';
import { Patients } from "@/types"

type ContextType = {
    patients: Patients,
    setPatients: React.Dispatch<React.SetStateAction<Patients>>,
    isModalOpen: boolean,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    isLoading: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
}

const InitialState = {
    patients: [],
    setPatients: () => [],
    isModalOpen: false,
    setIsModalOpen: () => {},
    isLoading: false,
    setIsLoading: () => {}
}

const PatientContext = createContext<ContextType>(InitialState)

export default PatientContext

// export const PatientProvider = ({ children }: { children: React.ReactNode }) => {
//     const [Patients, setPatients] = useState<Patients>([]);
//     const [isModalOpen, setIsModalOpen] = useState(false)

//     // Fonction pour ajouter un employé
//     const addPatient = async (newPatient: Patient) => {
//         try {
//             // Envoyer la requête POST à l'API pour ajouter un nouvel employé
//             const response = await axios.post('localhost:5000/api/patients', newPatient);

//             // Mettre à jour la liste des employés avec la réponse de l'API
//             setPatients([...Patients, response.data]);
//         } catch (error) {
//             console.error('Erreur lors de l\'ajout d\'un employé :', error);
//         }
//     };

//     const value = {
//         Patients,
//         setPatients,
//         addPatient,
//         isModalOpen,
//         setIsModalOpen
//     };

//     return <PatientContext.Provider value={ value }> { children } </PatientContext.Provider>
// };

// // Fonction personnalisée pour utiliser le contexte
// export const usePatientContext = () => useContext(PatientContext);

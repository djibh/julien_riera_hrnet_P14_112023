import { createContext, useState, useContext } from "react";
import axios from 'axios';
import { Employee } from "@/types"


type ContextType = {
    employees: Employee[],
    setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>,
    isModalOpen: boolean,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const InitialState = {
    employees: [],
    setEmployees: () => [],
    isModalOpen: false,
    setIsModalOpen: () => { },
}

const EmployeeContext = createContext<ContextType>(InitialState)

export default EmployeeContext

// export const EmployeeProvider = ({ children }: { children: React.ReactNode }) => {
//     const [employees, setEmployees] = useState<Employee[]>([]);
//     const [isModalOpen, setIsModalOpen] = useState(false)

//     // Fonction pour ajouter un employé
//     const addEmployee = async (newEmployee: Employee) => {
//         try {
//             // Envoyer la requête POST à l'API pour ajouter un nouvel employé
//             const response = await axios.post('localhost:5000/api/employees', newEmployee);

//             // Mettre à jour la liste des employés avec la réponse de l'API
//             setEmployees([...employees, response.data]);
//         } catch (error) {
//             console.error('Erreur lors de l\'ajout d\'un employé :', error);
//         }
//     };

//     const value = {
//         employees,
//         setEmployees,
//         addEmployee,
//         isModalOpen,
//         setIsModalOpen
//     };

//     return <EmployeeContext.Provider value={ value }> { children } </EmployeeContext.Provider>
// };

// // Fonction personnalisée pour utiliser le contexte
// export const useEmployeeContext = () => useContext(EmployeeContext);

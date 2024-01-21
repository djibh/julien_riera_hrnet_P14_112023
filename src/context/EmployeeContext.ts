import { createContext } from "react";
import { Employee } from "@/types"

type ContextType = {
    employees: Employee[],
    setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>,
    isModalOpen: boolean,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const ContextInit = {
    employees: [],
    setEmployees: () => [],
    isModalOpen: false,
    setIsModalOpen: () => { },
}

const EmployeeContext = createContext<ContextType>(ContextInit)

export default EmployeeContext
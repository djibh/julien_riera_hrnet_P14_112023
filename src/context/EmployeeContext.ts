import { createContext } from "react";
import { Employee } from "../data/employees"

type ContextType = {
    employees: Employee[],
    setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>,
}

const ContextInit = {
    employees: [],
    setEmployees: () => [],
}

const EmployeeContext = createContext<ContextType>(ContextInit)

export default EmployeeContext
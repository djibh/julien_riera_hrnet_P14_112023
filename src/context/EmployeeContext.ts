import { createContext } from "react";
import { Employee } from "../data/employees"

type ContextType = {
    employees: Employee[],
    newEmployee: Employee
}

const ContextInit = {
    employees: [{
        id: Math.round(Math.random()*100),
        firstName: 'Bobby',
        lastName: 'Context Finger',
        startDate: '12/12/2023', 
        department: 'Sales',
        birthDate: '02/04/1978', 
        street: '2',
        city: 'New York',
        state: 'WA',
        zipCode: 35000
    },
    {
        id: Math.round(Math.random()*100), 
        firstName: 'Tony',
        lastName: 'Context Stark',
        startDate: '28/02/2010', 
        department: 'Engineering',
        birthDate: '02/11/1983', 
        street: '2',
        city: 'New York',
        state: 'WA',
        zipCode: 35000
    }],
    newEmployee: {
        id: 0,
        firstName: '',
        lastName: '',
        startDate: '', 
        department: '',
        birthDate: '', 
        street: '',
        city: '',
        state: '',
        zipCode: 0
    },
    
}

const EmployeeContext = createContext<ContextType>(ContextInit)

export default EmployeeContext
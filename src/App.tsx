import EmployeesTable from './components/employees/EmployeesTable';
import Navbar from '../src/components/navbar/Navbar'
import { useState } from 'react';
import EmployeeContext from './context/EmployeeContext';

const initNewEmployee = {id: 0,
  firstName: '',
  lastName: '',
  startDate: '', 
  department: '',
  birthDate: '', 
  street: '',
  city: '',
  state: '',
  zipCode: 0
}

  const initEmployees = [{
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
}]

export default function App() {
  const [newEmployee, setNewEmployee] = useState(initNewEmployee)
  const [employees, setEmployees] = useState(initEmployees)

  const ContextValue = {
    newEmployee,
    setNewEmployee,
    employees,
    setEmployees
  }
  return (
    <EmployeeContext.Provider value={ContextValue}>
      <main>
        <Navbar />
        <EmployeesTable />
      </main>
    </EmployeeContext.Provider>
  );
}
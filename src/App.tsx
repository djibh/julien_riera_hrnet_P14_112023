import EmployeesTable from './components/employees/EmployeesTable';
import Navbar from '../src/components/navbar/Navbar'
import { useState } from 'react';
import EmployeeContext from './context/EmployeeContext';

const initEmployee = {id: 0,
  firstName: '',
  lastName: '',
  startDate: '', 
  department: '',
  birthDate: '', 
  street: '',
  city: '',
  state: '',
  zipCode: 0}

export default function App() {
  const [newEmployee, setNewEmployee] = useState(initEmployee)
  const [employees, setEmployees] = useState([])

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
import EmployeesTable from '../components/employees/EmployeeTable';
import { useState } from 'react';
import EmployeeContext from '../context/EmployeeContext';
import { ToastContainer } from 'react-toastify';
import initialEmployees from '../data/initialEmployees'

export default function Homepage() {
  const [employees, setEmployees] = useState(initialEmployees)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const ContextValue = {
    employees,
    setEmployees,
    isModalOpen,
    setIsModalOpen
  }

  return (
    <EmployeeContext.Provider value={ContextValue}>
        <EmployeesTable />
      {/* toast notification for employee form submission */}
      <ToastContainer position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" />
    </EmployeeContext.Provider>
  );
}
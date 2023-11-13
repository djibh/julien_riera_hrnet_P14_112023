import { createEmployee, employees } from '../../data/employees'

interface Column {
    id: 'firstName' | 'lastName' | 'startDate' | 'department' | 'birthDate' | 'street' | 'city' | 'state' | 'zipCode'
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
  }

export const columns: Column[] = [
    { id: 'firstName', label: 'First Name', minWidth: 120 },
    { id: 'lastName', label: 'Last Name', minWidth: 120 },
    {
      id: 'startDate',
      label: 'Start Date',
      minWidth: 90,
      align: 'right',
    },
    {
      id: 'department',
      label: 'Department',
      minWidth: 100,
      align: 'right',
    },
    {
      id: 'birthDate',
      label: 'Date of Birth',
      minWidth: 90,
      align: 'right',
    },
    {
      id: 'street',
      label: 'Street',
      minWidth: 70,
      align: 'right',
    },
    {
      id: 'city',
      label: 'City',
      minWidth: 100,
      align: 'right',
    },
    {
      id: 'state',
      label: 'State',
      minWidth: 70,
      align: 'right',
    },
    {
      id: 'zipCode',
      label: 'Zip Code',
      minWidth: 70,
      align: 'right',
    },
  ];
  
export const rows = 
    employees.map(employee => {
        return createEmployee(
            employee.firstName,
            employee.lastName,
            employee.startDate,
            employee.department,
            employee.birthDate,
            employee.street,
            employee.city,
            employee.state,
            employee.zipCode,
        )        
    })
;
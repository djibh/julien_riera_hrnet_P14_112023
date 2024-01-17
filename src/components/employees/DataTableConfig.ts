import { createEmployee, employees } from '../../data/employees'

interface Column {
    field: 'id' | 'firstName' | 'lastName' | 'startDate' | 'department' | 'birthDate' | 'address' | 'city' | 'state' | 'postalCode';
    headerName: string;
    headerAlign?: 'right' | 'center' | 'left';
    width?: number;
    align?: 'right' | 'center' | 'left';
    format?: (value: number) => string;
  }
  
export const columns: Column[] = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'startDate', headerName: 'Start date', width: 120 },
  { field: 'department', headerName: 'Department', width: 150},
  { field: 'birthDate', headerName: 'Date of birth', width: 120 },
  { field: 'address', headerName: 'Street', width: 200},
  { field: 'city', headerName: 'City', width: 160 },
  { field: 'state', headerName: 'State', width: 70, align: 'center' },
  { field: 'postalCode', headerName: 'Zip Code', width: 100, align: 'center' }
];

export const rows = 
    employees.map(employee => {
        return createEmployee(
            employee.id,
            employee.firstName,
            employee.lastName,
            employee.startDate,
            employee.department,
            employee.birthDate,
            employee.address,
            employee.city,
            employee.state,
            employee.postalCode,
        )        
    })
;
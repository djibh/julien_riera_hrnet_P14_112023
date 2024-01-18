/* EmployeeTableConfig.ts
 *
 * This file provides the configuration for the general structure of the EmployeesTable component.
 *  
 */


interface Column {
    field: 'id' | 'firstName' | 'lastName' | 'startDate' | 'department' | 'birthDate' | 'street' | 'city' | 'state' | 'zipCode';
    headerName: string;
    width?: number;
    align?: 'right';
    format?: (value: number) => string;
  }
  
export const columns: Column[] = [
  { field: 'id', headerName: 'ID', width: 60 },
  { field: 'firstName', headerName: 'First name', width: 140 },
  { field: 'lastName', headerName: 'Last name', width: 140 },
  { field: 'startDate', headerName: 'Start date', width: 120 },
  { field: 'department', headerName: 'Department', width: 180},
  { field: 'birthDate', headerName: 'Date of birth', width: 120 },
  { field: 'street', headerName: 'Street', width: 180},
  { field: 'city', headerName: 'City', width: 160 },
  { field: 'state', headerName: 'State', width: 100 },
  { field: 'zipCode', headerName: 'Zip Code', width: 100 }
];
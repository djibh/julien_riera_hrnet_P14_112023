/* EmployeeTableConfig.ts
 *
 * This file provides the configuration for the general structure of the EmployeesTable component.
 *  
 */


interface Column {
  field: 'id' | 'firstName' | 'lastName' | 'startDate' | 'department' | 'birthDate' | 'address' | 'city' | 'postalCode';
  headerName: string;
  width?: number;
  align?: 'right';
  format?: (value: number) => string;
}

export const columns: Column[] = [
  { field: 'id', headerName: 'ID', width: 60 },
  { field: 'firstName', headerName: 'Prénom', width: 140 },
  { field: 'lastName', headerName: 'Nom', width: 140 },
  { field: 'startDate', headerName: 'Embauche', width: 110 },
  { field: 'department', headerName: 'Service', width: 140 },
  { field: 'birthDate', headerName: 'Date de naissance', width: 140 },
  { field: 'address', headerName: 'Adresse', width: 180 },
  { field: 'city', headerName: 'Ville', width: 120 },
  { field: 'postalCode', headerName: 'Code postal', width: 100 }
];
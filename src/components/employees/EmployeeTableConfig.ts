/* EmployeeTableConfig.ts
 *
 * This file provides the configuration for the general structure of the EmployeesTable component.
 *  
 */


interface Column {
  field: 'id' | 'firstName' | 'lastName' | 'startDate' | 'department' | 'birthDate' | 'street' | 'city' | 'postalCode';
  headerName: string;
  width?: number;
  align?: 'right';
  format?: (value: number) => string;
}

export const columns: Column[] = [
  { field: 'id', headerName: 'ID', width: 60 },
  { field: 'firstName', headerName: 'Prénom', width: 100 },
  { field: 'lastName', headerName: 'Nom', width: 100 },
  { field: 'startDate', headerName: 'Embauche', width: 100 },
  { field: 'department', headerName: 'Service', width: 120 },
  { field: 'birthDate', headerName: 'Date de naissance', width: 100 },
  { field: 'street', headerName: 'Adresse', width: 120 },
  { field: 'city', headerName: 'Ville', width: 110 },
  { field: 'postalCode', headerName: 'Code postal', width: 80 }
];
export interface Data {
    firstName: string,
    lastName: string,
    startDate: string,
    department: string,
    birthDate: string,
    street: number,
    city: string,
    state: string,
    zipCode: number
  }
  
  export const employees: Data[] = [ 
    {
        firstName: 'Bobby',
        lastName: 'Finger',
        startDate: '12/12/2023', 
        department: 'Sales',
        birthDate: '02/04/1978', 
        street: 2,
        city: 'New York',
        state: 'WA',
        zipCode: 35000
    },
    {
        firstName: 'Tony',
        lastName: 'Stark',
        startDate: '28/02/2010', 
        department: 'Engineering',
        birthDate: '02/11/1983', 
        street: 2,
        city: 'New York',
        state: 'WA',
        zipCode: 35000
    },
    {
        firstName: 'Amy',
        lastName: 'Crafthouse',
        startDate: '24/05/2017', 
        department: 'P&L',
        birthDate: '02/04/1978', 
        street: 3,
        city: 'Miami',
        state: 'FL',
        zipCode: 35000
    },
    {
        firstName: 'Sylvie',
        lastName: 'Varan',
        startDate: '14/10/2023', 
        department: 'Merch',
        birthDate: '02/04/1978', 
        street: 6,
        city: 'San Francisco',
        state: 'CA',
        zipCode: 35000
    }
  ]
  
  export function createEmployee(
    firstName: string,
    lastName: string,
    startDate: string,
    department: string,
    birthDate: string,
    street: number,
    city: string,
    state: string,
    zipCode: number
  ): Data {
    return { firstName, lastName, startDate, department, birthDate, street, city, state, zipCode };
  }
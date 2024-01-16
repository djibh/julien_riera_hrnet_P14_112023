export interface Employee {
    id: number,
    firstName: string,
    lastName: string,
    startDate: string,
    department: string,
    birthDate: string,
    address: string,
    city: string,
    state: string,
    postalCode: number,
  }
  
  export const employees: Employee[] = [ 
    {
        id: Math.round(Math.random()*100),
        firstName: 'Bobby',
        lastName: 'Finger',
        startDate: '12/12/2023', 
        department: 'Sales',
        birthDate: '02/04/1978', 
        address: '2',
        city: 'New York',
        state: 'WA',
        postalCode: 35000
    },
    {
        id: Math.round(Math.random()*100), 
        firstName: 'Tony',
        lastName: 'Stark',
        startDate: '28/02/2010', 
        department: 'Engineering',
        birthDate: '02/11/1983', 
        address: '2',
        city: 'New York',
        state: 'WA',
        postalCode: 35000
    },
    {
        id: Math.round(Math.random()*100), 
        firstName: 'Amy',
        lastName: 'Crafthouse',
        startDate: '24/05/2017', 
        department: 'P&L',
        birthDate: '02/04/1978', 
        address: '3',
        city: 'Miami',
        state: 'FL',
        postalCode: 35000
    },
    {
        id: Math.round(Math.random()*100), 
        firstName: 'Sylvie',
        lastName: 'Varan',
        startDate: '14/10/2023', 
        department: 'Merch',
        birthDate: '02/04/1978', 
        address: '6',
        city: 'San Francisco',
        state: 'CA',
        postalCode: 35000
    },
    {
        id: Math.round(Math.random()*100),
        firstName: 'Bobby',
        lastName: 'Finger',
        startDate: '12/12/2023', 
        department: 'Sales',
        birthDate: '02/04/1978', 
        address: '2',
        city: 'New York',
        state: 'WA',
        postalCode: 35000
    },
    {
        id: Math.round(Math.random()*10), 
        firstName: 'Tony',
        lastName: 'Stark',
        startDate: '28/02/2010', 
        department: 'Engineering',
        birthDate: '02/11/1983', 
        address: '2',
        city: 'New York',
        state: 'WA',
        postalCode: 35000
    },
    {
        id: Math.round(Math.random()*100),
        firstName: 'Amy',
        lastName: 'Crafthouse',
        startDate: '24/05/2017', 
        department: 'P&L',
        birthDate: '02/04/1978', 
        address: '3',
        city: 'Miami',
        state: 'FL',
        postalCode: 35000
    },
    {
        id: Math.round(Math.random()*100),
        firstName: 'Sylvie',
        lastName: 'Varan',
        startDate: '14/10/2023', 
        department: 'Merch',
        birthDate: '02/04/1978', 
        address: '6',
        city: 'San Francisco',
        state: 'CA',
        postalCode: 35000
    },
    {
        id: Math.round(Math.random()*100),
        firstName: 'Bobby',
        lastName: 'Finger',
        startDate: '12/12/2023', 
        department: 'Sales',
        birthDate: '02/04/1978', 
        address: '2',
        city: 'New York',
        state: 'WA',
        postalCode: 35000
    },
    {
        id: Math.round(Math.random()*100),
        firstName: 'Tony',
        lastName: 'Stark',
        startDate: '28/02/2010', 
        department: 'Engineering',
        birthDate: '02/11/1983', 
        address: '2',
        city: 'New York',
        state: 'WA',
        postalCode: 35000
    },
    {
        id: Math.round(Math.random()*100),
        firstName: 'Amy',
        lastName: 'Crafthouse',
        startDate: '24/05/2017', 
        department: 'P&L',
        birthDate: '02/04/1978', 
        address: '3',
        city: 'Miami',
        state: 'FL',
        postalCode: 35000
    },
    {
        id: Math.round(Math.random()*100),
        firstName: 'Sylvie',
        lastName: 'Varan',
        startDate: '14/10/2023', 
        department: 'Merch',
        birthDate: '02/04/1978', 
        address: '6',
        city: 'San Francisco',
        state: 'CA',
        postalCode: 35000
    }
  ]
  
  export function createEmployee(
    id: number,
    firstName: string,
    lastName: string,
    startDate: string,
    department: string,
    birthDate: string,
    address: string,
    city: string,
    state: string,
    postalCode: number
  ): Employee {
    return { id, firstName, lastName, startDate, department, birthDate, address, city, state, postalCode };
  }
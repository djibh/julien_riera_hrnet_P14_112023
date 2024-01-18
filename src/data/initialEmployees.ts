import { Employee } from '../shared/lib/types'

const initialEmployees: Employee[] = [{
    id: Math.round(Math.random()*100),
    firstName: 'Bobby',
    lastName: 'Initstate Finger',
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
    lastName: 'Initstate Stark',
    startDate: '28/02/2010', 
    department: 'Engineering',
    birthDate: '02/11/1983', 
    street: '21',
    city: 'New York',
    state: 'WA',
    zipCode: 35000
},
{
  id: Math.round(Math.random()*100), 
  firstName: 'Sophia',
  lastName: 'Initstate Connors',
  startDate: '28/02/2010', 
  department: 'Engineering',
  birthDate: '02/11/1983', 
  street: '7',
  city: 'New York',
  state: 'WA',
  zipCode: 35000
},{
  id: Math.round(Math.random()*100), 
  firstName: 'Sophia',
  lastName: 'Initstate Connors',
  startDate: '28/02/2010', 
  department: 'Engineering',
  birthDate: '02/11/1983', 
  street: '7',
  city: 'New York',
  state: 'WA',
  zipCode: 35000
}]

export default initialEmployees;
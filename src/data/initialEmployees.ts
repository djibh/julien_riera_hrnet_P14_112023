import { v4 as uuidv4 } from 'uuid';
import { Employee } from '../shared/lib/types';

const initialEmployees: Employee[] = [
  {
    id: uuidv4(),
    firstName: 'Chuck',
    lastName: 'Norris',
    startDate: '01/01/2000',
    department: 'Legal',
    birthDate: '03/10/1940',
    street: '123 Roundhouse Kick Lane',
    city: 'Walker',
    state: 'TX',
    zipCode: 75000,
  },
  {
    id: uuidv4(),
    firstName: 'Homer',
    lastName: 'Simpson',
    startDate: '15/04/1987',
    department: 'Engineering',
    birthDate: '12/05/1956',
    street: '742 Evergreen Terrace',
    city: 'Springfield',
    state: 'IL',
    zipCode: 62701,
  },
  {
    id: uuidv4(),
    firstName: 'Harry',
    lastName: 'Potterhead',
    startDate: '01/09/1991',
    department: 'Marketing',
    birthDate: '31/07/1980',
    street: '4 Privet Drive',
    city: 'Little Whinging',
    state: 'AR',
    zipCode: 10000,
  },
  {
    id: uuidv4(),
    firstName: 'Sherlock',
    lastName: 'Holmeslice',
    startDate: '01/01/1887',
    department: 'Legal',
    birthDate: '06/01/1854',
    street: '221B Baker Street',
    city: 'London',
    state: 'MD',
    zipCode: 99999,
  },
  {
    id: uuidv4(),
    firstName: 'Mickey',
    lastName: 'Mouseketeer',
    startDate: '18/11/1928',
    department: 'Sales',
    birthDate: '18/11/1928',
    street: 'Walt Disney World',
    city: 'Orlando',
    state: 'FL',
    zipCode: 32830,
  },
  {
    id: uuidv4(),
    firstName: 'Elon',
    lastName: 'Mars',
    startDate: '06/06/2002',
    department: 'Engineering',
    birthDate: '28/06/1971',
    street: 'Rocket Launchpad',
    city: 'Mars Colony',
    state: 'MA',
    zipCode: 12345,
  },
  {
    id: uuidv4(),
    firstName: 'Darth',
    lastName: 'Vaderade',
    startDate: '04/05/1977',
    department: 'Human Resources',
    birthDate: '41 BBY',
    street: 'Death Star',
    city: 'Space',
    state: 'NH',
    zipCode: 67889,
  },
  {
    id: uuidv4(),
    firstName: 'Wonder',
    lastName: 'Womanizer',
    startDate: '25/10/1941',
    department: 'Legal',
    birthDate: '17/12/1937',
    street: 'Themyscira Island',
    city: 'Paradise',
    state: 'CA',
    zipCode: 88888,
  },
  {
    id: uuidv4(),
    firstName: 'Jack',
    lastName: 'Sparrowdoughnut',
    startDate: '09/07/2003',
    department: 'Human Resources',
    birthDate: '13/06/1965',
    street: 'Black Pearl Ship',
    city: 'Tortuga',
    state: 'HI',
    zipCode: 55555,
  },
  {
    id: uuidv4(),
    firstName: 'Winnie',
    lastName: 'the Pooh-Pooh',
    startDate: '14/10/1926',
    department: 'Marketing',
    birthDate: '14/10/1926',
    street: 'Hundred Acre Wood',
    city: 'Ashdown Forest',
    state: 'GA',
    zipCode: 77777,
  },
];

export default initialEmployees;

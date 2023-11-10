import EmployeesTable from './components/employees/EmployeesTable';
import Navbar from '../src/components/navbar/Navbar'

export default function App() {
  return (
    <main>
      <Navbar />
      <h1>EMPLOYEES</h1>
      <EmployeesTable />
    </main>
  );
}
import EmployeesTable from './components/employees/EmployeesTable';

export default function App() {
  return (
    <main>
      <nav>
        <div className='logo'>HRnet</div>
      </nav>
      <h1>EMPLOYEES</h1>
      <EmployeesTable />
    </main>
  );
}
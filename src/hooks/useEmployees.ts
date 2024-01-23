import { useContext, useEffect } from "react";
import EmployeeContext from '../context/EmployeeContext';

export default function useEmployees() {
  const { setEmployees } = useContext(EmployeeContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/employees');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setEmployees(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [setEmployees]);
}


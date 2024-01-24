import { useContext, useEffect } from "react";
import PatientContext from '@/context/PatientContext';

export default function usePatients() {
  const { setPatients } = useContext(PatientContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/Patients');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setPatients(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [setPatients]);
}


import PatientsTable from '@/components/patients/PatientTable';
import { useState } from 'react';
import PatientContext from '@/context/PatientContext';
import initialPatients from '@/data/initialPatients'

export default function Homepage() {
  const [patients, setPatients] = useState(initialPatients)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const ContextValue = {
    patients,
    setPatients,
    isModalOpen,
    setIsModalOpen
  }

  return (
    <PatientContext.Provider value={ContextValue}>
        <PatientsTable/>
    </PatientContext.Provider>
  );
}

import PatientsTable from '@/components/patients/PatientTable';
import { useState } from 'react';
import PatientContext from '@/context/PatientContext';
import { Patient } from '@/types';

const INITIAL_PATIENTS: Patient[] = []

export default function Homepage() {
  const [patients, setPatients] = useState(INITIAL_PATIENTS)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const ContextValue = {
    patients,
    setPatients,
    isModalOpen,
    setIsModalOpen,
    isLoading,
    setIsLoading
  }

  return (
    <PatientContext.Provider value={ContextValue}>
        <PatientsTable/>
    </PatientContext.Provider>
  );
}

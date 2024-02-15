import PatientsTable from '@/components/patients/PatientTable';
import { useEffect, useState } from 'react';
import PatientContext from '@/context/PatientContext';
import AuthContext from '@/context/AuthContext';
import { Patients } from '@/types';
import { AxiosResponse } from 'axios';
import { getPatients } from '@/core/api/PatientService';

const INITIAL_PATIENTS: Patients = []

export default function Homepage() {
  const [patients, setPatients] = useState(INITIAL_PATIENTS)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const fetchPatients = async () => {
      const response: AxiosResponse<Patients> = await getPatients()
      setPatients(response.data)
    }
    fetchPatients()
    .catch(console.error)    
    setIsLoading(false)
  }, [setPatients, setIsLoading])

  const patientContextValue = {
    patients,
    setPatients,
    isModalOpen,
    setIsModalOpen,
    isLoading,
    setIsLoading
  }

  if (isLoading) {
    return <div> LOADING </div>
  } else {
    return (
      <AuthContext>
      <PatientContext.Provider value={patientContextValue}>
          <PatientsTable/>
      </PatientContext.Provider>
      </AuthContext>
    );
  }
}

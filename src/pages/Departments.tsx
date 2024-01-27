import styled from 'styled-components';
import DepartmentCard from '../components/departments/DepartmentCard'
import { getDepartments } from '@/api/DepartmentService'

import { Department } from '@/types';
import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

const initialDepartments: Department[] = []

export default function Departments() {
  const [ departments, setDepartments ] = useState(initialDepartments)


  useEffect(() => {
    const fetchDepartments = async () => {
      const response: AxiosResponse<Department[]> = await getDepartments()
      setDepartments(response.data)
    }
    fetchDepartments()
      .catch(console.error)    
  }, [setDepartments])

  return (<>
      <h2>Services</h2>
      <ServicesStyled>
        {
          departments.map(({ id, title }) => {
            const randomPatientsInDep = Math.floor(Math.random() * 30);
            return <DepartmentCard key={id} departmentTitle={title} patientsCount={randomPatientsInDep}/>
          })
        }     
      </ServicesStyled>
    </>
    );
}

const ServicesStyled = styled.section`
  display: grid;
  margin: auto;
  max-width: 1200px;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 10px;
`;
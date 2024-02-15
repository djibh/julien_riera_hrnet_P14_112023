import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import styled from 'styled-components';
import DepartmentCard from '../components/departments/DepartmentCard'
import { getDepartments } from '@/core/api/DepartmentService'
import { Department } from '@/types';
import { Error, SectionHeader } from "@/components/ui"

const initialDepartments: Department[] = []

export default function Departments() {
  const [ departments, setDepartments ] = useState(initialDepartments)
  const [ isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    setIsLoading(true)
    const fetchDepartments = async () => {
      const response: AxiosResponse<Department[]> = await getDepartments()
      setDepartments(response.data)
    }
    fetchDepartments()
    .catch(console.error)  
    setIsLoading(false)
  }, [setDepartments])

  if (isLoading) {
    return <div> LOADING </div>
  }

  if (departments.length === 0) {
    return <ServicesStyled className='no-result__wrapper'>
              <Error />
          </ServicesStyled>
  } 

  return (<ServicesStyled>
      <SectionHeader
        title='Services'
      />
      <section>
        {
          departments.map(({ id, title, manager, phone, numberOfPatients }) => {
            return <DepartmentCard key={ id } title={ title } manager={ manager } phone={ phone } numberOfPatients={ numberOfPatients }/>
          })
        }     
      </section>
    </ServicesStyled>
    );
}

const ServicesStyled = styled.div`
  section {
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    gap: 15px;
  }

  &.no-result__wrapper {
      display: grid;
      place-items: center;
      height: 100%;
    }
`;
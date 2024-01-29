/* PatientsTable.tsx - Component
 *
 * This component is built using Material UI grid component. It provides all of the features needed from the previous version of the site.
 * e.g. - global search, column filter, sorting...
 * 
 * A config file is used to build the header cells and the columns. 
 * 
 */

import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';
import FolderOffIcon from '@mui/icons-material/FolderOff';
import { columns } from './PatientTableConfig'
import SectionHeader from '../reusable/SectionHeader'
import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import PatientContext from '@/context/PatientContext';
import { getPatients } from '@/api/PatientService'
import { AxiosResponse } from 'axios';
import { Patient } from '@/types';
import theme from '@/design/theme';
import Form from '../patients/form/Form'

// This function is used to show the built-in search field of the MUI datagrid.
function QuickSearchToolbar() {
  return (
      <div className="search-field">
        <GridToolbarQuickFilter />
      </div>
  );
}

export default function PatientTable() {
  const { patients, setPatients, isLoading, setIsLoading } = useContext(PatientContext)

  useEffect(() => {
    setIsLoading(true)
    const fetchPatients = async () => {
      const response: AxiosResponse<Patient[]> = await getPatients()
      setPatients(response.data)
    }
    fetchPatients()
    .catch(console.error)    
    setIsLoading(false)
  }, [setPatients, setIsLoading])

    if (isLoading) {
      return <div> LOADING </div>
    }

    if (patients.length === 0) {
      return <TableWrapperStyled className='no-result__wrapper'>
              <div>
                <FolderOffIcon className='no-result__icon' />
                <div>Aucune donnée disponible</div>
              </div>
            </TableWrapperStyled>
    } 
    
    return (
      <TableWrapperStyled className='wrapper'>
        <SectionHeader 
        title='Patients' 
        subtitle={`Il y a actuellement ${patients.length} patients enregistrés.`}
        form={ <Form/> }
        showButton
        />
        <DataGrid
          className='datatable'
          slots={{toolbar: QuickSearchToolbar}}
          key={Math.random()*100*4}
          rows={patients}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10, 20]}
        />
      </TableWrapperStyled>
  )
}

const TableWrapperStyled = styled.div`
    padding-bottom: 3em;

    th, td {
      font-family: 'IBM Plex Sans', sans-serif;
    }

    .search-field {
      position:"relative";
      display: flex;
      align-items: center;
      width: "30%";
      height: 60px;
      text-align: left;
      border-width:"0";
    }

    .datatable {
      border: none;
      width: 100%;
      padding: 0.5em 1.5em;
      background-color: ${theme.colors.ghostWhite};
      border-radius: 10px;
      box-shadow: 0px 1px 1px 1px #ccc;
    }

    &.no-result__wrapper {
      display: grid;
      place-items: center;
      height: 100%;

      div {
        text-align: center;
        color: ${theme.colors.verdigris};
        font-size: 1.6rem;
      }
      
      .no-result__icon {
        font-size: 100px;
      }
    }
`;
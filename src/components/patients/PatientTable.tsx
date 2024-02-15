/* PatientsTable.tsx - Component
 *
 * This component is built using Material UI grid component. It provides all of the features needed from the previous version of the site.
 * e.g. - global search, column filter, sorting...
 * 
 * A config file is used to build the header cells and the columns. 
 * 
 */

import styled from 'styled-components';
import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { columns } from './PatientTableConfig'
import { SectionHeader } from '../ui/SectionHeader'
import { useContext } from 'react';
import PatientContext from '@/context/PatientContext';
import theme from '@/design/theme';
import Form from '../patients/form/Form'
import { Error } from '@/components/ui/Error'

// This function is used to show the built-in search field of the MUI datagrid.
function QuickSearchToolbar() {
  return (
      <div className="search-field">
        <GridToolbarQuickFilter />
      </div>
  );
}

export default function PatientTable() {
  const { patients } = useContext(PatientContext)

  if (patients.length === 0) {
    return <TableWrapperStyled className='no-result__wrapper'>
              <Error />
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

    

    [title~="Rhumatologie"], [title~="adultes"], [title~="Toxicologie"], [title~="Pneumologie"] {
      padding: 3px 10px;
      border-radius: 20px;
      color: ${theme.colors.ghostWhite};
    }

    [title~="Rhumatologie"] {
      background-color: ${theme.colors.grey500};
    }

    [title~="adultes"] {
      background-color: ${theme.colors.magentaHaze};
    }

    [title~="Toxicologie"] {
      background-color: ${theme.colors.glaucous};
    }

    [title~="Pneumologie"] {
      background-color: ${theme.colors.keppel};
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
      box-shadow: ${theme.shadows.low};;
    }

    &.no-result__wrapper {
      display: grid;
      place-items: center;
      height: 100%;
    }
`;
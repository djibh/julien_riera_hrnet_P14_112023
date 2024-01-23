/* EmployeesTable.tsx - Component
 *
 * This component is built using Material UI grid component. It provides all of the features needed from the previous version of the site.
 * e.g. - global search, column filter, sorting...
 * 
 * A config file is used to build the header cells and the columns. 
 * 
 */

import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { columns } from './EmployeeTableConfig'
import Header from '../header/Header'
import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import EmployeeContext from '@/context/EmployeeContext';
import { getEmployees } from '@/api/EmployeeService'
import { AxiosResponse } from 'axios';
import { Employee } from '@/types';
import theme from '@/design/theme';

// This function is used to show the built-in search field of the MUI datagrid.
function QuickSearchToolbar() {
  return (
      <div className="search-field">
        <GridToolbarQuickFilter />
      </div>
  );
}

export default function EmployeeTable() {
  const { employees, setEmployees } = useContext(EmployeeContext)

  useEffect(() => {
    const fetchEmployees = async () => {
      const response: AxiosResponse<Employee[]> = await getEmployees()
      setEmployees(response.data)
    }
    fetchEmployees()
      .catch(console.error)    
  }, [setEmployees])

    return (
      <TableWrapperStyled className='wrapper'>
        <Header />
        <DataGrid
          className='datatable'
          slots={{toolbar: QuickSearchToolbar}}
          key={Math.random()*100*4}
          rows={employees}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10, 20]}
        />
      </TableWrapperStyled>
  )
}

const TableWrapperStyled = styled.div`
    max-width: 1200px;
    margin: auto;
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
      /* background-color: white; */
      background-color: ${theme.colors.ghostWhite};
      border-radius: 10px;
      box-shadow: 0px 1px 1px 1px #ccc;
    }
`;
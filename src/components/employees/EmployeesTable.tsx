import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { columns } from './DataTableConfig'
import Header from '../header/Header'
import styled from 'styled-components';
import { colors } from '../../design';
import { useContext, useEffect } from 'react';
import EmployeeContext from '../../context/EmployeeContext';

function QuickSearchToolbar() {
  return (
      <div style={{ width:"30%", textAlign:"left", position:"relative", borderWidth:"0"}}>
        <GridToolbarQuickFilter />
      </div>
  );
}

export default function EmployeesTable() {
  const { employees, setEmployees } = useContext(EmployeeContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/employees'); 
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
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10, 20]}
        />
      </TableWrapperStyled>
  )
}

const TableWrapperStyled = styled.div`
    max-width: 1400px;
    margin: auto;
    text-align: center;
    padding-inline: 0.5em;

    th, td {
      font-family: 'IBM Plex Sans', sans-serif;
    }

    .datatable {
      border: none;
      width: 100%;
      padding: 0.5em 1.5em;
      background-color: ${colors.grey100};
      border-radius: 10px;
    }
`;
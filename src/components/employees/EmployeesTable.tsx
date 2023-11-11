import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import SelectDropdown from '../reusable/SelectDropdown'
import { columns, rows } from './DataTableConfig'

import styled from 'styled-components';
  

export default function EmployeesTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event: unknown, newPage: number) => {
      event = null // to conform signature and avoir linter warning
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  return (
    <TableWrapperStyled className='wrapper'>
      <h1>EMPLOYEES</h1>
      <div className='search'>
        <div className='search-input__container'>
          <SearchIcon />
          <input type="text" id='search-input'/>
        </div>
        <SelectDropdown label='Sort' options={['First name','Last name']} />
        <AddCircleIcon id='add-button'/>
      </div>
      <Paper sx={{ width: '100%', overflow: 'hidden', backgroundColor:'#444',borderRadius:'10px', padding: '0.5em 1.5em' }}>
          <TableContainer sx={{ maxHeight: 500 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, backgroundColor: "#444", color: 'white', fontWeight: 'bold' }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody >
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.lastName+row.birthDate}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align} sx={{color: 'white'}}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{color: '#bbb'}}
          />
        </Paper>
    </TableWrapperStyled>
  )
}

const TableWrapperStyled = styled.div`
    max-width: 1200px;
    margin: auto;
    text-align: center;

    svg {
      font-size: 2rem;
    }

    h1 {
      font-size: 2rem;
      margin: 1em;
    }

    .search {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5em;
      width: 100%;
      margin-bottom: 1em;
    }

    .search-input__container {
      display: flex;
      padding: 0.5em;
      background-color: rgba(68, 68, 68, 0.35);
      backdrop-filter: blur(3px);
      -webkit-backdrop-filter: blur(3px);
      border-radius: 10px;
      flex: 1;
    }

    #search-input {
      flex: 1;
      outline: none;
      border: none;
      font-size: 1.2rem;
    }

    #add-button {
      font-size: 2rem;
      filter: drop-shadow(0px 1px 2px black)
    }    
`;
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import React from "react";

export default function Form() {
  return (
    <>
        <FormStyled>
            <TextField id="filled-basic" label="First name" variant="filled" />
            <TextField id="filled-basic" label="Last name" variant="filled" />
            <TextField id="filled-basic" label="Start date" variant="filled" />
            <TextField id="filled-basic" label="Department" variant="filled" />
            <TextField id="filled-basic" label="Date of birth" variant="filled" />
            <TextField id="filled-basic" label="Street" variant="filled" />
            <TextField id="filled-basic" label="City" variant="filled" />
            <TextField id="filled-basic" label="State" variant="filled" />
            <TextField id="filled-basic" label="Zip code" variant="filled" />
        </FormStyled>
    </>
  )
}


const FormStyled = styled.form`
  background-color: white;
  display: flex;
  margin-bottom: 2em;
  border-radius: 5px;

  

    input {
        color: green;
    }

    label {
      /* color: #eee; */
    }

`;
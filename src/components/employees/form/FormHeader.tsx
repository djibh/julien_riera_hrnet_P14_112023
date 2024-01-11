import styled from "styled-components";

export default function FormHeader() {
  return (
    <FormHeaderStyled>
        <img src="/logo-form.png" alt="Logo de la société Wealth Health" className="logo"/>
        <h2>Create employee</h2>
    </FormHeaderStyled>
  )
}

const FormHeaderStyled = styled.div`
    h2 {
        margin: 0;
        
    }
    img {
        width: 15%;
    }
`;
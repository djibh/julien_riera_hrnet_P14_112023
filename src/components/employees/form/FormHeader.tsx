/* FormHeader.tsx - Component
 *
 * This component is used to build the header UI of the form, here it's the logo and title.
 * 
 */

import styled from "styled-components";

export default function FormHeader() {
  return (
    <FormHeaderStyled>
        <img src="/logo2.png" alt="Logo de la société Wealth Health" className="logo"/>
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
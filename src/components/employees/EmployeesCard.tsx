import theme from "@/design/theme";
import { Employee } from "@/types";
import styled from "styled-components";

export default function EmployeesCard({firstName, lastName, position, email, avatar}: Employee) {
  return (
    <EmployeeCardStyles>
        <img src={avatar} className="navbar__avatar" alt="avatar" />
        <h2>{ firstName } { lastName }</h2>
        <h3>{ position }</h3>
        <div>{ email }</div>
    </EmployeeCardStyles>
  )
}

const EmployeeCardStyles = styled.article`
    background-color: white;
    color: ${theme.colors.black};
    padding: 70px 10px;
    border-radius: 5px;
    box-shadow: ${theme.shadows.low};  
    text-align: center;
    color: ${theme.colors.grey600};


    h2, h3 {
        margin: 0;
        line-height: 1.4;
    }

    h2 {
        font-size: 1.2rem;
        color: ${theme.colors.grey700};
    }

    h3 {
        font-size: 1.1rem;
        font-weight: normal;
        color: ${theme.colors.grey600};
    }

    .navbar__avatar {
        max-width: 140px;
        margin-bottom: 1em;
        border-radius: 50%;
        background-color: ${theme.colors.lavender};
    }
`;
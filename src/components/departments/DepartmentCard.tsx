import theme from "@/design/theme";
import styled from "styled-components";

type DepartmentCardProps = {
    departmentTitle: string,
    patientsCount: number
}

export default function DepartmentCard({departmentTitle, patientsCount}: DepartmentCardProps) {
  return (
    <DepartmentCardStyled>
        <h3>{ departmentTitle }</h3>
        <h4>Responsable de service: Truc Muche</h4>
        <div>Nombre de patients: { patientsCount } </div>
    </DepartmentCardStyled>
  )
}

const DepartmentCardStyled = styled.article`
    padding: 15px;
    border-radius: 5px;
    background-color: ${theme.colors.ghostWhite};
    color: black;
    box-shadow: 0px 1px 1px 1px #ccc;


    h3 {
        margin-block: 0;
    }

    h4 {
      margin-block: 5px 15px;
      font-weight: normal;
    }

    div {
      color: ${theme.colors.cadetGray};
    }
`;
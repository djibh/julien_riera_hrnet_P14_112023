import theme from "@/design/theme";
import styled from "styled-components";

type DepartmentCardProps = {
    title: string,
    manager: string,
    phone: string,
    patientsCount: number
}

export default function DepartmentCard({title, manager, phone, patientsCount}: DepartmentCardProps) {
  return (
    <DepartmentCardStyled>
        <div className="card-title">
          <h3>{ title }</h3>
          <h4>{ phone }</h4>
        </div>
        <h4 className="manager">Chef de service : { manager }</h4>
        <h5 className="patients-count">Patients admis : { patientsCount } </h5>
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
        font-size: 1.05rem;
    }

    h4 {
      margin: 0;
      font-weight: normal;
      font-size: 0.85rem;
    }

    h5 {
      margin: 0px;
      font-size: 0.9rem;
      font-weight: normal;
    }

    .card-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid ${theme.colors.keppel};
    }

    .manager {
      margin-block: 15px 0px;
      font-weight: normal;
      font-size: 0.9rem;
    }
`;
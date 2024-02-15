import styled from 'styled-components';
import { SectionHeader } from "../components/ui";
import EmployeeCard from "../components/employees/EmployeesCard"
import { Employees } from '@/types';

const INITIAL_EMPLOYEES: Employees = [
  { firstName: "Julien", lastName: "Riera", position: "IT", email: "contact@riera.com", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Tigger&scale=110" },
  { firstName: "Berney", lastName: "Beckett", position: "IT", email: "contact@beckett.com", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Jasper&scale=110&backgroundColor=d1d4d9" },
  { firstName: "Gaston", lastName: "Bienportant", position: "Pédiatrie", email: "contact@bienportant.com", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Lily&scale=110&backgroundColor=ffd5dc" },
  { firstName: "Rosalie", lastName: "Panacée", position: "Toxicologie", email: "contact@panacee.com", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Mia&scale=110&backgroundColor=ffdfbf" }
]

export default function Employees() {
  return (<EmployeesStyled>
      <SectionHeader
        title='Personnel'
      />
      <section>
        { 
          INITIAL_EMPLOYEES.map(({ firstName, lastName, position, email, avatar }) => {
            return <EmployeeCard firstName={ firstName } lastName={ lastName } position={ position } email={ email } avatar={ avatar }/>
          })
        }
      </section>
    </EmployeesStyled>
    );
}

const EmployeesStyled = styled.div`
  section {
    display: grid;
    grid-template-columns: repeat(4, minmax(280px, 1fr));
    gap: 30px;
  }

  &.no-result__wrapper {
      display: grid;
      place-items: center;
      height: 100%;
    }
`;
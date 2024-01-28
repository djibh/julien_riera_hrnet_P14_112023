/* Header.tsx - Component
 *
 * This component is used to display main title of the Patients page and build the NewPatientModal component.
 *  
 */

import NewSectionItemModal from '@/components/Patients/modal/NewPatientModal';
import styled from 'styled-components';
import theme from '@/design/theme';

type HeaderProps = {
  title: string;
  subtitle?: string;
  showButton?: true;
  form: JSX.Element;
} | {
  title: string;
  subtitle?: string;
  showButton?: false;
  form?: never;
};

export default function SectionHeader({ title, subtitle, form, showButton }: HeaderProps) {
  return (
    <HeaderStyled>
      <div className='title'>
        <h1>{ title }</h1>
        <h2>{ subtitle }</h2>
      </div>
      { showButton && <NewSectionItemModal form={ form }/> }
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 1.5em;

  .title {
    flex: 1;

    h1 {
      font-size: 1.6rem;
      color: ${theme.colors.black};
      margin-bottom: 0;
    }

    h2 {
      font-size: 0.95rem;
      margin-top: 5px;
      color: ${theme.colors.cadetGray};
    }
  }
  
`;
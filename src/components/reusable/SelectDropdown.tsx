import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import styled from 'styled-components';

type SelectProps = {
    label: string,
    options: string[]
}

export default function SelectDropdown({label, options}: SelectProps) {
  const [isActive, setIsActive] = useState(false)

  const toggleSelectDropdown = () => {
    setIsActive(!isActive)
  }
  const optionsClass = isActive ? "visible" : ""
  const dropdownClass = isActive ? "active" : "inactive"

  return (
    <SelectDropdownStyled>
          <div>{label}</div>
          <div className={`select-options ${optionsClass}`}>
            { options.map((option) => <div className='select-options__item'>{option}</div>) }
          </div>
          <button onClick={toggleSelectDropdown}><ExpandMoreIcon className={`expand-chevron ${dropdownClass}`}/></button>
    </SelectDropdownStyled>
  )
}

const SelectDropdownStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.2em;
  min-width: 100px;
  border-bottom: 2px solid #bbb;
  font-size: 1.2rem;
  flex: 1.5;

  .select-options {
    display: none;
  }

  .visible {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 100%;
    right: 0;
    width: 100%;
    background: #bbb;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    z-index: 1000;
    > * {
      padding-block: 0.3em;
    }
  }

  button { 
    display: flex;
    padding: 0;
  }

  .expand-chevron {
    transition: 160ms;
    font-size: 2rem;
    &.active {
      transform: rotate(-180deg);
      color : hsl(71.13402061855669, 49.23857868020305%, 60.627450980392155%);
    }
  }
`;
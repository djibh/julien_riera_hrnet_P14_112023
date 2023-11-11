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

  return (
    <SelectDropdownStyled>
        <div>{label}</div>
        <div className={`select-options ${optionsClass}`}>
        {
            options.map((option) => <div className='select-options__item'>{option}</div>)
        }
        </div>
        <button onClick={toggleSelectDropdown}><ExpandMoreIcon /></button>
    </SelectDropdownStyled>
  )
}

const SelectDropdownStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.5em;
  min-width: 90px;
  border: 1px solid #bbb;
  border-radius: 10px;

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
    z-index: 1000;
  }
`;
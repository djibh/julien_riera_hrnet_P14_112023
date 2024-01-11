import { styled } from 'styled-components'
import { colors } from "../../../design";
import { useContext } from 'react';
import EmployeeContext from '../../../context/EmployeeContext';

export default function FormFooter() {
    const { setIsModalOpen } = useContext(EmployeeContext)

    const cancelActionOnClick= (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setIsModalOpen(false)
    }

    return (
        <FormFooterStyled className="form-footer">
            <button id="cancel-btn" type="button" aria-label="Cancel new employee creation" onClick={cancelActionOnClick}>Cancel</button>
            <button id="submit-btn" type="submit" aria-label='Confirm new employee creation'>Create</button>
        </FormFooterStyled>
    )
}

const FormFooterStyled = styled.div`
    display: flex;
    justify-content: center;
    gap: 6em;

    button {
        border-radius: 25px;
        font-size: 1rem;
    }

    #cancel-btn {
        border: none;
        font-weight: 700;
        color: ${colors.grey400};
        
        &:hover {
            color: ${colors.grey500};
        }
    }
    
    #submit-btn {
        padding: 0.5em 1em;
        background-color: ${colors.blue500};
        border: none;
        font-weight: 700;
        color: white;

        &:hover {
            background-color: ${colors.blue600};
        }
    }
`;
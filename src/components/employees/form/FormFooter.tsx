/* FormFooter.tsx - Component
 *
 * This component is used to handle the cancel and submit buttons of the form.
 * 
 */

import { styled } from 'styled-components'
import colors from "../../../design";
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
        padding: 10px;
        font-size: 1rem;
        min-width: 120px;
        border-radius: 5px;
        font-weight: 700;
        border: none;
    }

    #cancel-btn {
        color: ${colors.verdigris};
        
        &:hover {
            color: ${colors.grey500};
        }
    }
    
    #submit-btn {
        background-color: ${colors.submitButton};
        color: white;

        &:hover {
            background-color: ${colors.submitButtonHover};
        }
    }
`;
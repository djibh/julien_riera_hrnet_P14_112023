/* FormFooter.tsx - Component
 *
 * This component is used to handle the cancel and submit buttons of the form.
 * 
 */

import { styled } from 'styled-components'
import { useContext } from 'react';
import PatientContext from '@/context/PatientContext';
import theme from '@/design/theme';

export default function FormFooter() {
    const { setIsModalOpen } = useContext(PatientContext)

    const cancelActionOnClick= (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setIsModalOpen(false)
    }

    return (
        <FormFooterStyled className="form-footer">
            <button id="cancel-btn" type="button" aria-label="Cancel new Patient creation" onClick={cancelActionOnClick}>Cancel</button>
            <button id="submit-btn" type="submit" aria-label='Confirm new Patient creation'>Create</button>
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
        color: ${theme.colors.verdigris};
        
        &:hover {
            color: ${theme.colors.grey500};
        }
    }
    
    #submit-btn {
        background-color: ${theme.colors.submitButton};
        color: white;

        &:hover {
            background-color: ${theme.colors.submitButtonHover};
        }
    }
`;
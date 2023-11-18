import styled from "styled-components";
import { colors } from "../../design";
import DatePicker  from "react-datepicker"
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

type FormProps = {
    closeAction: () => void
    submitAction: () => void
}

export default function Form({ closeAction, submitAction }: FormProps) {
const [startDate, setStartDate] = useState(new Date())

  return (
    <FormStyled>
        <div className="modal-header">
            <img src="/logo-form.png" alt="Logo de la société Wealth Health" className="logo"/>
            <h2>Create employee</h2>
        </div>
        <div className="modal-body">
                <div className="flex">
                    <label htmlFor="firstName">First name</label>
                    <input type="text" id="firstName" />
                </div>
                <div className="flex">
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" id="lastName" />
                </div>
                <div className="flex">
                    <label htmlFor="startDate">Start date</label>
                    <DatePicker selected={startDate} onChange={(date: Date) => {setStartDate(date)}} />
                </div>
                <div className="flex">
                    <label htmlFor="department">Department</label>
                    <input type="text" id="department" />
                </div>
                <div className="flex">
                    <label htmlFor="birthDate">Date of birth</label>
                    <DatePicker selected={startDate} onChange={(date: Date) => {setStartDate(date)}} />
                </div>
                <div className="flex">
                    <label htmlFor="street">Street</label>
                    <input type="text" id="street" />
                </div>
                <div className="flex">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" />
                </div>
                <div className="flex">
                    <label htmlFor="state">State</label>
                    <input type="text" id="state" />
                </div>
                <div className="flex">
                    <label htmlFor="zipCode">Zip code</label>
                    <input type="text" id="zipCode" />
                </div>
            
        </div>
        <div className="modal-footer">
            <button id="cancel-btn" onClick={closeAction}>Cancel</button>
            <button id="submit-btn" role="button" onClick={submitAction}>Create</button>
        </div>
    </FormStyled>
)
}

const FormStyled = styled.form`
    padding: 2em 3em;
    min-width: 500px;
    /* max-width: 650px; */
    max-height: 95svh;
    background-color: ${colors.grey050};
    color: ${colors.grey800};
    border-radius: 10px;
    box-shadow: 0px 7px 10px 0px #353535;
    overflow: scroll;

    .modal-header {
        h2 {
            margin-block: 0.5em 2em;
            
        }
        img {
            width: 15%;
        }
    }

    .modal-body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: left;
        gap: 0.8em;


       .flex {
            display: flex;
            align-items: baseline;
       }

        label {
            flex: 1;
            font-size: 0.95rem;
            font-weight: 600;
            color: ${colors.grey600};
            font-family: 'IBM Plex Mono', sans-serif;
        }

        input {
            background-color: transparent;
            padding-inline: 0.5em;
            padding-bottom: 0.5em;
            border: none;
            border-bottom: 2px solid #ddd;
            font-size: 1rem;
            color: ${colors.grey700};
            width: 60%;

            &:focus {
                border-bottom: 2px solid ${colors.primary};
                outline: none;
            }
        }
    }
    
    .modal-footer {
        display: flex;
        justify-content: center;
        gap: 6em;
        padding-top: 3em;
    
        button {
            color: ${colors.grey800};
            border: 1px solid ${colors.blue700};
            border-radius: 25px;
            font-size: 1rem;
        }

        #cancel-btn {
            border: none;
            font-weight: 700;
            color: ${colors.grey500};
            
            &:hover {
                color: ${colors.grey700};
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
    }
`;
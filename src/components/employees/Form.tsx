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
            <img src="/logo.png" alt="Logo de la société Wealth Health" className="logo"/>
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
    padding: 3em;
    min-width: 500px;
    max-width: 650px;
    background: white;
    color: ${colors.grey800};
    border-radius: 10px;
    box-shadow: 0px 7px 16px 0px #353535;

    .modal-header {
        h2 {
            margin-block: 0.5em 1.5em;
        }
        img {
            width: 15%;
        }
    }

    .modal-body {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: left;
        gap: 0.5em;

       .flex {
            display: flex;
       }

        label {
            flex: 1;
            font-size: 0.9rem;
            font-weight: 700;
            color: ${colors.grey800};
        }

        input {
            background-color: transparent;
            padding-inline: 0.5em;
            padding-bottom: 0.3em;
            border: none;
            border-bottom: 1px solid #ddd;
            color: ${colors.grey800};
            margin-bottom: 1.5em;
            flex: 2.5;

            &:focus {
                border-bottom: 1px solid ${colors.primary};
                outline: none;
            }
        }
    }
    
    .modal-footer {
        display: flex;
        justify-content: center;
        gap: 6em;
        padding-block: 1em;
    
        button {
            color: ${colors.grey800};
            border: 1px solid ${colors.blue700};
            border-radius: 5px;
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
    }
`;
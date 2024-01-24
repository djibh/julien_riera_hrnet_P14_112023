/* FormBody.tsx - Component
 *
 * This component builds the inputs the user is required to fulfill to submit the form.
 * 
 * Two librairies are used to make it easier:
 * -> react-select for the dropdown inputs
 * -> react-datepicker for the date selection inputs
 * 
 */

import Select from "react-select";
import DatePicker  from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { departments } from './FormConfig'
import styled from "styled-components";
import { SetStateAction } from "react";
import theme from "@/design/theme";

type FormBodyProps = {
    admissionDate: Date,
    birthDate: Date,
    selectedDepartment: {label: string, value: string},
    selectedState: {label: string, value: string},
    setAdmissionDate: React.Dispatch<SetStateAction<Date>>,
    setBirthDate: React.Dispatch<SetStateAction<Date>>,
    setSelectedDepartment: React.Dispatch<SetStateAction<{label: string, value: string}>>,
    setSelectedState: React.Dispatch<SetStateAction<{label: string, value: string}>>,
}

export default function FormBody({admissionDate, birthDate, selectedDepartment, setSelectedDepartment, setAdmissionDate, setBirthDate}: FormBodyProps) {
  return (
    <FormBodyStyled className="form-body">
        <div className="flex">
            <label htmlFor="firstName">Prénom</label>
            <input type="text" name="firstName" id="firstName" />
        </div>
        <div className="flex">
            <label htmlFor="lastName">Nom</label>
            <input type="text" name="lastName" id="lastName" />
        </div>
        <div className="flex">
            <label htmlFor="admissionDate">Admission</label>
            <DatePicker className="datepicker" selected={admissionDate} id="admissionDate" dateFormat="dd/MM/yyyy" onChange={(date: Date) => {setAdmissionDate(date)}} />
        </div>
        <div className="flex">
            <label htmlFor="department">Service</label>
            <Select
                className="select"
                name="department"
                defaultValue={selectedDepartment}
                onChange={(newValue) => {
                    if (newValue !== null) {
                      setSelectedDepartment(newValue);
                    }
                  }}
                options={departments}
                inputId="department"
            />
        </div>
        <div className="flex">
            <label htmlFor="birthDate">Date de naissance</label>
            <DatePicker className="datepicker" id="birthDate" dateFormat="dd/MM/yyyy" selected={birthDate} onChange={(date: Date) => {setBirthDate(date)}} />
        </div>
        <div className="flex">
            <label htmlFor="address">Adresse</label>
            <input type="text" name="address" id="address" />
        </div>
        <div className="flex">
            <label htmlFor="city">Ville</label>
            <input type="text" name="city" id="city" />
        </div>
        <div className="flex">
            <label htmlFor="postalCode">Code postal</label>
            <input type="text" name="postalCode" id="postalCode" />
        </div>
    </FormBodyStyled>
  )
}

const FormBodyStyled = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /* text-align: left; */
        gap: 1em;

        label {
            font-size: 0.95rem;
            font-weight: 600;
            color: ${theme.colors.grey600};
            font-family: 'IBM Plex Mono', sans-serif;
        }

        

        input {
            background-color: transparent;
            padding-inline: 0.5em;
            padding-bottom: 0.5em;
            border: none;
            border-bottom: 2px solid #ddd;
            font-size: 1rem;
            color: ${theme.colors.grey700};

            &:focus {
                border-bottom: 2px solid ${theme.colors.primary};
                outline: none;
            }
        }

        .flex {
            display: flex;
            justify-content: space-between;
            align-items: baseline;

            .select {
                width: 45%;
            }
       }
  
`;
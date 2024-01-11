import Select from "react-select";
import DatePicker  from "react-datepicker";
import { departments, states } from './FormConfig'
import styled from "styled-components";
import { colors } from "../../../design";
import { SetStateAction } from "react";

type FormBodyProps = {
    startDate: Date,
    birthDate: Date,
    selectedDepartment: {label: string, value: string},
    selectedState: {label: string, value: string},
    setStartDate: React.Dispatch<SetStateAction<Date>>,
    setBirthDate: React.Dispatch<SetStateAction<Date>>,
    setSelectedDepartment: React.Dispatch<SetStateAction<{label: string, value: string}>>,
    setSelectedState: React.Dispatch<SetStateAction<{label: string, value: string}>>,
}

export default function FormBody({startDate, birthDate, selectedDepartment, selectedState, setSelectedDepartment, setSelectedState, setStartDate, setBirthDate}: FormBodyProps) {
  return (
    <FormBodyStyled className="form-body">
        <div className="flex">
            <label htmlFor="firstName">First name</label>
            <input type="text" name="firstName" id="firstName" />
        </div>
        <div className="flex">
            <label htmlFor="lastName">Last name</label>
            <input type="text" name="lastName" id="lastName" />
        </div>
        <div className="flex">
            <label htmlFor="startDate">Start date</label>
            <DatePicker className="datepicker" selected={startDate} id="startDate" dateFormat="dd/MM/yyyy" onChange={(date: Date) => {setStartDate(date)}} />
        </div>
        <div className="flex">
            <label htmlFor="department">Department</label>
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
            <label htmlFor="birthDate">Date of birth</label>
            <DatePicker className="datepicker" id="birthDate" dateFormat="dd/MM/yyyy" selected={birthDate} onChange={(date: Date) => {setBirthDate(date)}} />
        </div>
        <div className="flex">
            <label htmlFor="street">Street</label>
            <input type="text" name="street" id="street" />
        </div>
        <div className="flex">
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" />
        </div>
        <div className="flex">
            <label htmlFor="state">State</label>
            <Select
                className="select"
                name="state"
                defaultValue={selectedState}
                onChange={(newValue) => {
                    if (newValue !== null) {
                      setSelectedState(newValue);
                    }
                  }}
                options={states}
                inputId="state"
            />
        </div>
        <div className="flex">
            <label htmlFor="zipCode">Zip code</label>
            <input type="text" name="zipCode" id="zipCode" />
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

            &:focus {
                border-bottom: 2px solid ${colors.primary};
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
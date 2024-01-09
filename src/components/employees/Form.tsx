import { useContext, useState, useRef } from "react";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import DatePicker  from "react-datepicker"
import EmployeeContext from "../../context/EmployeeContext";
import { colors } from "../../design";
import { departments, states } from './FormConfig'

export default function Form() {
const date = new Date() 
const [startDate, setStartDate] = useState(date)
const [birthDate, setBirthDate] = useState(date)
const [selectedDepartment, setSelectedDepartment] = useState({ value: '', label: 'Select' });
const [selectedState, setSelectedState] = useState({ value: '', label: 'Select' });
const { employees, setEmployees, setIsModalOpen } = useContext(EmployeeContext) 

const formRef = useRef<HTMLFormElement>(null);

const handleCancel= (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsModalOpen(false)

}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault()
    const requiredFields = ['firstName', 'lastName', 'street', 'city', 'zipCode'];

    if (!e.target || !(e.target instanceof HTMLFormElement)) {
    console.error("L'élément cible n'est pas un formulaire.");
    return;
    }

    const formElement = e.target;
    if (requiredFields.some(field => !formElement[field]?.value)) {
        console.error("Veuillez remplir tous les champs obligatoires.");
        return;
    }
    
    addEmployee(formElement)
    if (formRef.current) {
        formRef.current.reset()
        setBirthDate(date)
        setStartDate(date)
        setSelectedDepartment({ value: '', label: 'Select' })
        setSelectedState({ value: '', label: 'Select' })
    }
    setIsModalOpen(false)
 }

 const addEmployee = (formElement: HTMLFormElement) => { 
    const newEmployee = {
        id: Math.round(Math.random()*100),
        firstName: formElement.firstName.value,
        lastName:  formElement.lastName.value,
        startDate: startDate.toLocaleDateString("fr"),
        department: selectedDepartment.value,
        birthDate: birthDate.toLocaleDateString("fr"),
        street: formElement.street.value,
        city: formElement.city.value,
        state: selectedState.value,
        zipCode:  formElement.zipCode.value
    }
    const newList = [...employees, newEmployee]
    setEmployees(newList)
  }

  return (
    <FormStyled ref={formRef} onSubmit={handleSubmit}>
        <div className="form-header">
            <img src="/logo-form.png" alt="Logo de la société Wealth Health" className="logo"/>
            <h2>Create employee</h2>
        </div>
        <div className="form-body">
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
                    {/* <input type="text" id="department" /> */}
                    <Select
                        className="select"
                        name="department"
                        defaultValue={selectedDepartment}
                        // @ts-expect-error due to react-select lib
                        onChange={setSelectedDepartment}
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
                        // @ts-expect-error due to react-select lib
                        onChange={setSelectedState}
                        options={states}
                        inputId="state"
                    />
                </div>
                <div className="flex">
                    <label htmlFor="zipCode">Zip code</label>
                    <input type="text" name="zipCode" id="zipCode" />
                </div>
        </div>
        <div className="form-footer">
            <button id="cancel-btn" type="button" role="button" onClick={handleCancel}>Cancel</button>
            <button id="submit-btn" type="submit" role="submit">Create</button>
        </div>
    </FormStyled>
)
}

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 2em;
    padding: 2em 3em;
    min-width: 500px;
    max-height: 95svh;
    background-color: ${colors.grey050};
    color: ${colors.grey800};
    border-radius: 10px;
    box-shadow: 0px 6px 10px -3px ${colors.grey500};
    overflow-y: scroll;

    .form-header {
        h2 {
            margin: 0;
            
        }
        img {
            width: 15%;
        }
    }

    .form-body {
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
    }
    
    .form-footer {
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
    }
`;
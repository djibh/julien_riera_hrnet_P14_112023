/* Form.tsx - Component
 *
 * This component is used to build the form UI and holds the general logic need to add a new employee to the list.
 * 
 * A config file is used to provide a few helper functions and the dropdowns (department / state) select items.
 * 
 */

import { useContext, useState, useRef } from "react";
import styled from "styled-components";
import FormHeader from './FormHeader';
import FormBody from './FormBody';
import FormFooter from './FormFooter';
import { successNotification, errorNotification } from '../../reusable/Toasts'
import EmployeeContext from "../../../context/EmployeeContext";
import colors from "../../../design";
import { cleanFormOnSuccess, createFormEmployee } from './FormConfig'

export default function Form() {
const date = new Date() 
const [startDate, setStartDate] = useState(date)
const [birthDate, setBirthDate] = useState(date)
const [selectedDepartment, setSelectedDepartment] = useState({ value: '', label: 'Select' });
const [selectedState, setSelectedState] = useState({ value: '', label: 'Select' });
const { employees, setEmployees, setIsModalOpen } = useContext(EmployeeContext) 

const formRef = useRef<HTMLFormElement>(null);

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault()
    const requiredFields = ['firstName', 'lastName', 'street', 'city', 'zipCode'];
    
    //Typescript req - check if element is a form
    if (!e.target || !(e.target instanceof HTMLFormElement)) {
    console.error("L'élément cible n'est pas un formulaire.");
    return;
    }

    //Check if inputs are fulfilled
    const formElement = e.target;
    if (requiredFields.some(field => !formElement[field]?.value)) {
        errorNotification()
        return;
    }

    //Create employee from form data and add to table
    const newEmployee = createFormEmployee(formElement, startDate, selectedDepartment, birthDate, selectedState)
    const newList = [...employees, newEmployee]
    setEmployees(newList)

    //Clear form upon success submission, close modal and display success notification
    cleanFormOnSuccess(formRef, setBirthDate, setStartDate, setSelectedDepartment, setSelectedState)
    setIsModalOpen(false)
    successNotification()
 }

  return (
    <FormStyled ref={formRef} onSubmit={handleSubmit}>
        <FormHeader />
        <FormBody 
            startDate={startDate} 
            birthDate={birthDate} 
            selectedDepartment={selectedDepartment} 
            selectedState={selectedState} 
            setBirthDate={setBirthDate} 
            setStartDate={setStartDate} 
            setSelectedDepartment={setSelectedDepartment} 
            setSelectedState={setSelectedState}/>
        <FormFooter />
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
`;
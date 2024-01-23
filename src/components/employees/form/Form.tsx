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
import { successNotification, errorNotification } from '@/components/reusable/Toasts'
import EmployeeContext from "@/context/EmployeeContext";
import { cleanFormOnSuccess, createFormEmployee } from './FormConfig'
import { saveEmployee } from "@/api/EmployeeService"
import theme from "@/design/theme";

export default function Form() {
const date = new Date() 
const [startDate, setStartDate] = useState(date)
const [birthDate, setBirthDate] = useState(date)
const [selectedDepartment, setSelectedDepartment] = useState({ value: '', label: 'Select' });
const [selectedState, setSelectedState] = useState({ value: '', label: 'Select' });
const { employees, setEmployees, setIsModalOpen } = useContext(EmployeeContext) 

const formRef = useRef<HTMLFormElement>(null);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault()
    const requiredFields = ['firstName', 'lastName', 'address', 'city', 'postalCode'];
    
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
    const formEmployee = createFormEmployee(formElement, startDate, selectedDepartment, birthDate)
    
    //Clear form upon success submission, close modal and display success notification
    const newEmployeeResponse = await saveEmployee(formEmployee)
    const newEmployee = newEmployeeResponse.data.user;
    const newList = [...employees, newEmployee]
    setEmployees(newList)
    
    setIsModalOpen(false)
    cleanFormOnSuccess(formRef, setBirthDate, setStartDate, setSelectedDepartment, setSelectedState)
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
    background-color: ${theme.colors.grey050};
    color: ${theme.colors.black};
    border-radius: 10px;
    box-shadow: 0px 6px 10px -3px ${theme. colors.cadetGray};
    overflow-y: scroll;   
`;
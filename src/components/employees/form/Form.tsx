import { useContext, useState, useRef } from "react";
import styled from "styled-components";
import FormHeader from './FormHeader';
import FormBody from './FormBody';
import FormFooter from './FormFooter';
import { successNotification, errorNotification } from '../../reusable/Toasts'
import "react-datepicker/dist/react-datepicker.css";
import EmployeeContext from "../../../context/EmployeeContext";
import { colors } from "../../../design";
import { cleanFormOnSuccess, createFormEmployee } from './FormConfig'

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
    const requiredFields = ['firstName', 'lastName', 'street', 'city', 'postalCode'];
    
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

    //Create employee from form data and prepare data for state setter
    const newEmployee = createFormEmployee(formElement, startDate, selectedDepartment, birthDate, selectedState)

    try {
        const response = await fetch('http://localhost:5000/employee', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEmployee),
        });

        if (!response.ok) {
        throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('POST response:', result);

    } catch (error) {
        console.error('Error submitting form:', error);
    }

    // Réinitialisez le formulaire ou effectuez d'autres actions après la réussite de la requête
    const newList = [...employees, newEmployee]
    console.log("before");
    
    setEmployees(newList)

    console.log("after");
    
    cleanFormOnSuccess(formRef, setBirthDate, setStartDate, setSelectedDepartment, setSelectedState)

    //Clear form upon success submission, close modal and display success notification
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
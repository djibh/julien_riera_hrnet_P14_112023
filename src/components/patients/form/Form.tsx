/* Form.tsx - Component
 *
 * This component is used to build the form UI and holds the general logic need to add a new Patient to the list.
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
import PatientContext from "@/context/PatientContext";
import { cleanFormOnSuccess, createFormPatient } from './FormConfig'
import { savePatient } from "../../../api/PatientService"
import theme from "@/design/theme";

export default function Form() {
const date = new Date() 
const [admissionDate, setAdmissionDate] = useState(date)
const [birthDate, setBirthDate] = useState(date)
const [selectedDepartment, setSelectedDepartment] = useState({ value: '', label: 'Select' });
const [selectedState, setSelectedState] = useState({ value: '', label: 'Select' });
const { patients, setPatients, setIsModalOpen } = useContext(PatientContext) 

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

    //Create Patient from form data and add to table
    const formPatient = createFormPatient(formElement, admissionDate, selectedDepartment, birthDate)
    
    //Clear form upon success submission, close modal and display success notification
    const newPatientResponse = await savePatient(formPatient)
    const newPatient = newPatientResponse.data.user;
    const newList = [...patients, newPatient]
    setPatients(newList)
    
    setIsModalOpen(false)
    cleanFormOnSuccess(formRef, setBirthDate, setAdmissionDate, setSelectedDepartment, setSelectedState)
    successNotification()
 }

  return (
    <FormStyled ref={formRef} onSubmit={handleSubmit}>
        <FormHeader />
        <FormBody 
            admissionDate={admissionDate} 
            birthDate={birthDate} 
            selectedDepartment={selectedDepartment} 
            selectedState={selectedState} 
            setBirthDate={setBirthDate} 
            setAdmissionDate={setAdmissionDate} 
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
/* FormConfig.ts
 *
 * This file provides several helper functions as well as select options for the dropdown lists used in the form element.
 *  
 */

import { Dispatch, RefObject, SetStateAction } from "react"
import { Employee } from "@/types";

export const createFormEmployee = (
    formElement: HTMLFormElement,
    startDate: Date,
    selectedDepartment: { value: string, label: string },
    birthDate: Date,
): Employee => {
    return {
        firstName: formElement.firstName.value,
        lastName: formElement.lastName.value,
        startDate: startDate.toLocaleDateString("fr"),
        department: selectedDepartment.value,
        birthDate: birthDate.toLocaleDateString("fr"),
        address: formElement.address.value,
        city: formElement.city.value,
        postalCode: formElement.postalCode.value
    }
}

export const cleanFormOnSuccess = (
    ref: RefObject<HTMLFormElement>,
    setBirthDate: Dispatch<SetStateAction<Date>>,
    setStartDate: Dispatch<SetStateAction<Date>>,
    setSelectedDepartment: Dispatch<SetStateAction<{ value: string, label: string }>>,
    setSelectedState: Dispatch<SetStateAction<{ value: string, label: string }>>) => {
    const date = new Date()
    if (ref.current) {
        ref.current.reset()
        setBirthDate(date)
        setStartDate(date)
        setSelectedDepartment({ value: '', label: 'Select' })
        setSelectedState({ value: '', label: 'Select' })
    }
}

export const departments = [
    { value: 'Sales', label: 'Sales' },
    { value: 'Marketing', label: 'Marketing' },
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Human resources', label: 'Human Resources' },
    { value: 'Legal', label: 'Legal' },
];
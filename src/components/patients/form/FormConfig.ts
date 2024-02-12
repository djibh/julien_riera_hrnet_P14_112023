/* FormConfig.ts
 *
 * This file provides several helper functions as well as select options for the dropdown lists used in the form element.
 *  
 */

import { Dispatch, RefObject, SetStateAction } from "react"
import { Patient } from "@/types";

export const createFormPatient = (
    formElement: HTMLFormElement,
    admissionDate: Date,
    selectedDepartment: { value: string, label: string },
    birthDate: Date,
): Patient => {
    return {
        firstName: formElement.firstName.value,
        lastName: formElement.lastName.value,
        admissionDate: admissionDate.toLocaleDateString("fr"),
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
    setAdmissionDate: Dispatch<SetStateAction<Date>>,
    setSelectedDepartment: Dispatch<SetStateAction<{ value: string, label: string }>>,
    setSelectedState: Dispatch<SetStateAction<{ value: string, label: string }>>) => {
    const date = new Date()
    if (ref.current) {
        ref.current.reset()
        setBirthDate(date)
        setAdmissionDate(date)
        setSelectedDepartment({ value: '', label: 'Select' })
        setSelectedState({ value: '', label: 'Select' })
    }
}

export const departments = [
    { value: 'Rhumatologie', label: 'Rhumatologie', departmentId: 1 },
    { value: 'Psychiatrie', label: 'Psychiatrie', departmentId: 2 },
    { value: 'Ophtalmologie', label: 'Ophtalmologie', departmentId: 3 },
    { value: 'Toxicologie', label: 'Toxicologie', departmentId: 4 },
    { value: 'Pédiatrie', label: 'Pédiatrie', departmentId: 5 },
    { value: 'Neurologie', label: 'Pédiatrie', departmentId: 6 },
    { value: 'Chirurgie', label: 'Chirurgie', departmentId: 7 },
    { value: 'Urgences adulte', label: 'Urgences adulte', departmentId: 8 },
    { value: 'Urgences enfants', label: 'Urgences enfants', departmentId: 9 },
    { value: 'Pneumologie', label: 'Pneumologie', departmentId: 10 },
];
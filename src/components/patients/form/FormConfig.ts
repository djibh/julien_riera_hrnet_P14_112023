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
    { value: 'Rhumatologie', label: 'Rhumatologie' },
    { value: 'Gériatrie', label: 'Gériatrie' },
    { value: 'Ophtalmologie', label: 'Ophtalmologie' },
    { value: 'Toxicologie', label: 'Toxicologie' },
    { value: 'Pédiatrie', label: 'Pédiatrie' },
    { value: 'Psychiatrie', label: 'Psychiatrie' },
    { value: 'Bloc opératoire', label: 'Bloc opératoire' },
    { value: 'Urgences adulte', label: 'Urgences adulte' },
    { value: 'Pneumologie', label: 'Pneumologie' },
];
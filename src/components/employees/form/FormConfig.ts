/* FormConfig.ts
 *
 * This file provides several helper functions as well as select options for the dropdown lists used in the form element.
 *  
 */

import { Dispatch, RefObject, SetStateAction } from "react"
import { Employee } from "@/types";
import { v4 as uuidv4 } from 'uuid';

export const createFormEmployee = (
    formElement: HTMLFormElement,
    startDate: Date,
    selectedDepartment: { value: string, label: string },
    birthDate: Date,
    selectedState: { value: string, label: string }
): Employee => {
    return {
        id: uuidv4(),
        firstName: formElement.firstName.value,
        lastName: formElement.lastName.value,
        startDate: startDate.toLocaleDateString("fr"),
        department: selectedDepartment.value,
        birthDate: birthDate.toLocaleDateString("fr"),
        street: formElement.street.value,
        city: formElement.city.value,
        state: selectedState.value,
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

export const states = [
    {
        label: "Alabama",
        value: "AL"
    },
    {
        label: "Alaska",
        value: "AK"
    },
    {
        label: "American Samoa",
        value: "AS"
    },
    {
        label: "Arizona",
        value: "AZ"
    },
    {
        label: "Arkansas",
        value: "AR"
    },
    {
        label: "California",
        value: "CA"
    },
    {
        label: "Colorado",
        value: "CO"
    },
    {
        label: "Connecticut",
        value: "CT"
    },
    {
        label: "Delaware",
        value: "DE"
    },
    {
        label: "District Of Columbia",
        value: "DC"
    },
    {
        label: "Federated States Of Micronesia",
        value: "FM"
    },
    {
        label: "Florida",
        value: "FL"
    },
    {
        label: "Georgia",
        value: "GA"
    },
    {
        label: "Guam",
        value: "GU"
    },
    {
        label: "Hawaii",
        value: "HI"
    },
    {
        label: "Idaho",
        value: "ID"
    },
    {
        label: "Illinois",
        value: "IL"
    },
    {
        label: "Indiana",
        value: "IN"
    },
    {
        label: "Iowa",
        value: "IA"
    },
    {
        label: "Kansas",
        value: "KS"
    },
    {
        label: "Kentucky",
        value: "KY"
    },
    {
        label: "Louisiana",
        value: "LA"
    },
    {
        label: "Maine",
        value: "ME"
    },
    {
        label: "Marshall Islands",
        value: "MH"
    },
    {
        label: "Maryland",
        value: "MD"
    },
    {
        label: "Massachusetts",
        value: "MA"
    },
    {
        label: "Michigan",
        value: "MI"
    },
    {
        label: "Minnesota",
        value: "MN"
    },
    {
        label: "Mississippi",
        value: "MS"
    },
    {
        label: "Missouri",
        value: "MO"
    },
    {
        label: "Montana",
        value: "MT"
    },
    {
        label: "Nebraska",
        value: "NE"
    },
    {
        label: "Nevada",
        value: "NV"
    },
    {
        label: "New Hampshire",
        value: "NH"
    },
    {
        label: "New Jersey",
        value: "NJ"
    },
    {
        label: "New Mexico",
        value: "NM"
    },
    {
        label: "New York",
        value: "NY"
    },
    {
        label: "North Carolina",
        value: "NC"
    },
    {
        label: "North Dakota",
        value: "ND"
    },
    {
        label: "Northern Mariana Islands",
        value: "MP"
    },
    {
        label: "Ohio",
        value: "OH"
    },
    {
        label: "Oklahoma",
        value: "OK"
    },
    {
        label: "Oregon",
        value: "OR"
    },
    {
        label: "Palau",
        value: "PW"
    },
    {
        label: "Pennsylvania",
        value: "PA"
    },
    {
        label: "Puerto Rico",
        value: "PR"
    },
    {
        label: "Rhode Island",
        value: "RI"
    },
    {
        label: "South Carolina",
        value: "SC"
    },
    {
        label: "South Dakota",
        value: "SD"
    },
    {
        label: "Tennessee",
        value: "TN"
    },
    {
        label: "Texas",
        value: "TX"
    },
    {
        label: "Utah",
        value: "UT"
    },
    {
        label: "Vermont",
        value: "VT"
    },
    {
        label: "Virgin Islands",
        value: "VI"
    },
    {
        label: "Virginia",
        value: "VA"
    },
    {
        label: "Washington",
        value: "WA"
    },
    {
        label: "West Virginia",
        value: "WV"
    },
    {
        label: "Wisconsin",
        value: "WI"
    },
    {
        label: "Wyoming",
        value: "WY"
    }
];
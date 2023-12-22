import styled from "styled-components";
import { colors } from "../../design";
import DatePicker  from "react-datepicker"
import { useContext, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import EmployeeContext from "../../context/EmployeeContext";

type FormProps = {
    closeAction: () => void
    submitAction: () => void
}

const departments = [
    { value: 'Sales', label: 'Sales' },
    { value: 'Marketing', label: 'Marketing' },
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Human resources', label: 'Human Resources' },
    { value: 'Legal', label: 'Legal' },
  ];

  const states = [
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

export default function Form({ closeAction }: FormProps) {
const [startDate, setStartDate] = useState(new Date())
const [birthDate, setBirthDate] = useState(new Date())
const [selectedDepartment, setSelectedDepartment] = useState({ value: '', label: 'Select' });
const [selectedState, setSelectedState] = useState({ value: '', label: 'Select' });
const { employees, setEmployees, isModalOpen, setIsModalOpen } = useContext(EmployeeContext) 

const handleCancel= (e) => {
    e.preventDefault()
    setIsModalOpen(!isModalOpen)
}

const handleSubmit = (e) => { 
    e.preventDefault()
    const newEmployee = {
        id: Math.round(Math.random()*100),
        firstName: e.target.firstName.value,
        lastName:  e.target.lastName.value,
        startDate: startDate.toLocaleDateString("fr"),
        department: selectedDepartment.value,
        birthDate: birthDate.toLocaleDateString("fr"),
        street: e.target.street.value,
        city: e.target.city.value,
        state: selectedState.value,
        zipCode:  e.target.zipCode.value
    }
    const newList = [...employees, newEmployee]
    setEmployees(newList)
    setIsModalOpen(!isModalOpen)
 }

  return (
    <FormStyled onSubmit={handleSubmit}>
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
                    <DatePicker className="datepicker" selected={startDate} id="startDate" onChange={(date: Date) => {setStartDate(date)}} />
                </div>
                <div className="flex">
                    <label htmlFor="department">Department</label>
                    {/* <input type="text" id="department" /> */}
                    <Select
                        className="select"
                        name="department"
                        defaultValue={selectedDepartment}
                        onChange={setSelectedDepartment}
                        options={departments}
                        inputId="department"
                    />
                </div>
                <div className="flex">
                    <label htmlFor="birthDate">Date of birth</label>
                    <DatePicker className="datepicker" id="birthDate" selected={birthDate} onChange={(date: Date) => {setBirthDate(date)}} />
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
                        onChange={setSelectedState}
                        // value={selectedState}
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
            <button id="cancel-btn" role="button" onClick={handleCancel}>Cancel</button>
            <button id="submit-btn" role="submit">Create</button>
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
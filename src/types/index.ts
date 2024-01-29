// export type User = {
//     id: string;
//     name: string;
//     username: string;
//     email: string;
// };

export type Department = {
    id?: string,
    title: string,
    manager: string,
    phone: string,
    numberOfPatients: number
}

export type Patient = {
    id?: string,
    firstName: string,
    lastName: string,
    admissionDate: string,
    department: string,
    birthDate: string,
    address: string,
    city: string,
    postalCode: number
}

export type Patients = Patient[]
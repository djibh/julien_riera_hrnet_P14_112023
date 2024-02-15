export type User = {
    id?: string;
    username: string;
    password: string;
};

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

export type Employee = {
    id?: string,
    firstName: string,
    lastName: string,
    position: string,
    email: string,
    avatar: string
}

export type Patients = Patient[]
export type Employees = Employee[]
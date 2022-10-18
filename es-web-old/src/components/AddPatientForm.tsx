import React from "react";

export interface AddPatientData {
    fullName: string,
    dateOfBirth: string,
}

export interface AddPatientFormSubmitCallback{
    (addPatientData: AddPatientData): void
}

export interface AddPatientFormProps {
    onSubmit: AddPatientFormSubmitCallback
}

export const AddPatientForm: React.FC<AddPatientFormProps> = (props: AddPatientFormProps) => {
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (submitEvent) => {
        submitEvent.preventDefault();
        let formElements = (submitEvent.target as HTMLFormElement).elements;
        let fullName = (formElements.namedItem('fullName') as HTMLFormElement).value;
        let dateOfBirth = (formElements.namedItem('dateOfBirth') as HTMLFormElement).value;
        const addPatientData = {
            fullName: fullName,
            dateOfBirth: dateOfBirth,
        }
        props.onSubmit(addPatientData);
    }

    return (
        <form className="grid grid-cols-1 gap-6 items-start"
            onSubmit={handleSubmit}>
            <label className="block">
                <span>Full name</span>
                <input name="fullName" type="text" required className="form-input mt-1 block w-full"/>
            </label>
            <label className="block">
                <span>Date of birth</span>
                <input name="dateOfBirth" type="date" required className="form-input mt-1 block w-full"/>
            </label>
            <button className="rounded-lg bg-amber-100 hover:border-amber-600">Add patient</button>
        </form>
    )
}
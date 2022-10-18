import {describe, expect, test, vi} from "vitest";
import {AddPatientForm, AddPatientFormSubmitCallback} from "./AddPatientForm";
import {render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("AddPatientForm", () => {
    test("should pass the data to the callback on submit", async () => {
        const handleSubmit: AddPatientFormSubmitCallback = vi.fn();
        const { getByLabelText, getByText } = render(<AddPatientForm onSubmit={handleSubmit}/>);
        const user = userEvent.setup();

        await user.type(getByLabelText('Full name'), 'Joe Doe');
        await user.type(getByLabelText('Date of birth'), '2022-11-21');
        await user.click(getByText('Add patient'))

        expect(handleSubmit).toBeCalledWith({fullName: 'Joe Doe', dateOfBirth: '2022-11-21'})
    })
})
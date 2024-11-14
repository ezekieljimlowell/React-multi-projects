import { render } from "@testing-library/react";
import FormWrapper from "./TodoAddSection";


describe('Form', () => {
    it('should display input and submit button', () => {
        render(<FormWrapper />)

    });
    it('should not submit when submit with empty or invalid value', () => {
        render(<FormWrapper />)

    });
    it('should submit with valid value', () => {
        render(<FormWrapper />)

    });
});
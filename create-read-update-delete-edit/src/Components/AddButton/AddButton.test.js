import { render } from "@testing-library/react";
import SubmitButton from "./SubmitButton";


describe('Submit button', () => {
    it('should display submit button', () => {
        render(<SubmitButton />)
    });
    it('should call submit function after submit', () => {
        render(<SubmitButton />)
    });
});

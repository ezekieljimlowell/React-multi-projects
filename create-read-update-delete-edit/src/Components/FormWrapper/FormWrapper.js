import { Form } from "react-bootstrap";
import Input from "../Input";
import SubmitButton from "../SubmitButton";

const FormWrapper = () => {
    return (
        <Form>
            <div className="d-flex justify-content-center align-items-center">
                <Input />
                <SubmitButton />
            </div>
        </Form>
    )
}

export default FormWrapper;
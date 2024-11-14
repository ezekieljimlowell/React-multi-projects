import { Form } from "react-bootstrap";

const DatePicker = () => {
    return (
        <Form.Group className="ms-4">
            <Form.Control
                type="date"
                size="sm"
            />
        </Form.Group>
    )
}

export default DatePicker;

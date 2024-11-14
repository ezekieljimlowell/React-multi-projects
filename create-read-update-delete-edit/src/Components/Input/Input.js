import Form from "react-bootstrap/Form";

const Input = () => {
    return (
        <Form.Group>
            <Form.Control
                type="text"
                placeholder="Create Task"
                aria-label="Create Task Input"
                id="todo-input"
            />
        </Form.Group>
    )
}

export default Input;
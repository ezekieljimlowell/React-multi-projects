import Form from "react-bootstrap/Form";

const Input = () => {
    return (
        <Form.Group>
            <Form.Label htmlFor="todo-input" className="me-3">Add your daily task</Form.Label>
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
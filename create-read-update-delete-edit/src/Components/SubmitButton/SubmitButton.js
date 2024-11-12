import { Button } from "react-bootstrap";
import styles from "./SubmitButton.module.scss";

const SubmitButton = () => {
    return (
        <Button type="submit" variant="primary" size="sm" className={`${styles['submit_button__height']} ms-4`}>Add Task</Button>
    )
}

export default SubmitButton;

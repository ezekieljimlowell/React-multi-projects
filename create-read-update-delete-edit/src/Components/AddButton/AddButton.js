import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";
import styles from "./AddButton.module.scss";

const AddButton = ({ buttonText, variant }) => {
    return (
        <Button type="button" variant={variant} className={`${styles['submit_button__height']} ms-4 d-flex align-items-center`}>{buttonText}</Button>
    )
}

export default AddButton;

AddButton.prototype = {
    buttonText: PropTypes.string.isRequired,
    variant: PropTypes.string
}

AddButton.defaultProps = {
    variant: 'primary'
}

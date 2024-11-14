import Input from "../Input";
import AddButton from "../AddButton";
import DatePicker from "../DatePicker/DatePicker";

const TodoAddSection = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <Input />
            <DatePicker />
            <AddButton buttonText={'Add Task'} />
            <AddButton buttonText={'Clear All'} variant={'secondary'} />
        </div>
    )
}

export default TodoAddSection;

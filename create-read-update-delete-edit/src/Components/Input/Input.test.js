import { render } from "@testing-library/react"
import Input from "./Input"


const renderComponent = () => {
    render(<Input />)
}

describe('Todo Input', () => {
    it('should have Todo input availble', () => {
        renderComponent()
    });
    it('should focus input on click', () => {
        renderComponent()

    });
    it('should have text value when typed', () => {
        renderComponent()

    })
    it('should remove content when backspace is clicked and focussed', () => {
        renderComponent()

    })
})
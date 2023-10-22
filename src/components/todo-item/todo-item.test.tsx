import { render, screen, fireEvent, getByRole } from '@testing-library/react';
import { TodoItem } from './todo-item';

describe('Todo item component', () => {
    const handleRemove = jest.fn();
    const handleToggle = jest.fn();
    const mockTodoItem = {
        id: 1,
        text: 'Example Todo 1',
        isCompleted: false,
        handleToggle: handleToggle,
        handleRemove: handleRemove,
    };

    it('renders component', () => {
        render(<TodoItem {...mockTodoItem} />);
        expect(screen.getByText('Example Todo 1')).toBeInTheDocument();
    })

    it('calls onChange fn', () => {
        render(<TodoItem {...mockTodoItem} />);
        fireEvent.click(screen.getByRole('checkbox'));
        expect(handleToggle).toHaveBeenCalled();
    })
    it('calls onClick fn', () => {
        render(<TodoItem {...mockTodoItem} />);
        fireEvent.click(screen.getByRole('button', { hidden: false }));
        expect(handleRemove).toHaveBeenCalled();
    })



});
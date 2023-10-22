import { FC } from 'react';
import { TodoItem } from '../todo-item/todo-item';
import styles from './todo-list.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { deleteItem, toggleItem } from '../../redux/todoSlice';

export type TodosProps = {
    id?: number;
    text?: string;
    isCompleted?: boolean;
}

export const TodoList: FC<TodosProps> = () => {
    const todos = useSelector((state: RootState) => { return state.todos });
    const dispatch = useDispatch();
    const [parent] = useAutoAnimate();
    const sortedTodos = [...todos.filter(item => item.isCompleted !== true), ...todos.filter(item => item.isCompleted === true)];
    const handleToggle = (id: number, isCompleted: boolean) => () => dispatch(toggleItem({ id: id, completed: !isCompleted }));
    const handleRemove = (id: number) => () => { dispatch(deleteItem({ id: id })) };

    return (
        <ul className={styles.todoList} ref={parent}>
            {sortedTodos.map(todo => {
                const {id, text, isCompleted} = todo;
                return <TodoItem 
                id={id} 
                text={text} 
                isCompleted={isCompleted} 
                key={id} 
                handleToggle={handleToggle(id, isCompleted) }
                handleRemove={handleRemove(id)} />
            })}
        </ul>
    )
}
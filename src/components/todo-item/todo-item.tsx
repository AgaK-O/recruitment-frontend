import { FC } from "react";
import styles from './todo-item.module.scss';
import cx from "classnames";
import { TodosProps } from "../todo-list/todo-list";
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';

type Props = {
    handleToggle: () => void;
    handleRemove: () => void;
} & TodosProps

export const TodoItem: FC<Props> = ({ text, isCompleted, handleRemove, handleToggle }) => {

    return (
        <li className={ cx(styles.container, {[styles.completed]: isCompleted})}>
            <label className={styles.label}>
                <input className={styles.checkbox} type="checkbox" name="todo" checked={isCompleted} onChange={handleToggle}></input>
                {text}
            </label>
            <button type="button" className={styles.removeButton} onClick={handleRemove}><DeleteIcon /></button>
        </li>
    )
} 
import { FC, useState } from "react";
import styles from './add-item.module.scss';
import { useDispatch } from "react-redux";
import { addItem } from '../../redux/todoSlice'
import { ReactComponent as AddIcon } from '../../assets/icons/add.svg'

export const AddItem: FC = () => {
    const [value, setValue] = useState('');

    const dispatch = useDispatch();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (value) {
            dispatch(addItem({
                title: value,
            }));
        }
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <input
                type="text"
                className={styles.addItem}
                placeholder="Add new task"
                value={value}
                onChange={handleChange} />
            <button type="submit" className={styles.button}><AddIcon /></button>
        </form>
    )
}
import { FC, ReactNode } from "react";
import background from '../../assets/background.jpg';
import styles from './page-layout.module.scss'

type Props = {
    children: ReactNode;
}

export const PageLayout: FC<Props> = ({ children }) => {
    return (
    <div style={{ backgroundImage: `url(${background})` }} className={styles.background}>
        <header className={styles.header}>Things I need to do</header>
        <main className={styles.content}>{children}</main>
    </div>
    )
}
import React, { ReactNode } from "react";

import styles from "../../styles/Cards.module.css";

interface CardsProps {
    title: string;
    icon: string;
    children: ReactNode;
}

const Cards: React.FC<CardsProps> = ({ title, icon, children }) => {
    return (
        <div className={styles.contCard}>
            <div className={styles.contTitles}>
                <img className={styles.icon} src={icon} alt="Wave Vector" />
                <p>{title}</p>
            </div>
            <div className={styles.Content}>
                {children}
            </div>
        </div>
    );
};

export default Cards;

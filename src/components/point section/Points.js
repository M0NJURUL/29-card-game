import React from 'react';
import styles from './Points.module.css'

const Point = ({children}) => {
    return (
        <div className={styles.teamPoints}>
            {children}
        </div>
    );
}

export default Point;
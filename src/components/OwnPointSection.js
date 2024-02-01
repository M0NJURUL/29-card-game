import React from 'react';
import styles from './OwnPointSection.module.css';
import Card from '../components/card design/Card';
import {FlipCard} from '../components/card design/CardMiddleSuitSupplier';


const OwnPointSection = ({ term_result }) => {
    return (
        <div className={styles.ownTeam}>
            {/* <div className={styles.positive}><Card value='H6'/></div> */}
            {/* <div className={styles.negative}><Card value='S6'/></div> */}
            <div className={styles.flipped}><Card value='X'/></div>
        </div>
    );
}

export default OwnPointSection;
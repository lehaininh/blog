import React from 'react';
import styles from './landing_header.scss';

export default class LandingHeader extends React.Component {
    render() {
        return (
            <div className={styles.body}>
                <ul className={styles.menu}>
                    <li className={styles.menu_item}>
                        <a href="/travel">Travel</a>
                    </li>
                    <li className={styles.menu_item}>Programming</li>
                    <li className={styles.menu_item}>Others</li>
                </ul>
            </div>
        );
    }
}

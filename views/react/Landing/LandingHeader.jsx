import React from 'react';
import styles from './landing_header.scss';

export default class LandingHeader extends React.Component {
    render() {
        return (
            <div>
                <ul className={styles.menu}>
                    <li className={styles.menu_item}>About</li>
                    <li className={styles.menu_item}>Blog</li>
                    <li className={styles.menu_item}>My works</li>
                </ul>
            </div>
        );
    }
}

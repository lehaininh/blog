import React from 'react';
import styles from '../scss/test1.scss';

export default class Test1 extends React.Component {
    render() {
        return (
            <div className={styles.local}>
                <h1>Test 1 </h1>
                <p className={styles.redtext}>This is red also</p>
            </div>
        );
    }
}

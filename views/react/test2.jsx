import React from 'react';
import styles from '../scss/test2.scss';

export default class Test2 extends React.Component {
    render() {
        return (
            <div className={styles.local}>
                <div className={styles.redtext}>
                    This text should be blue
                    <p className={styles.change}>
                        And this one is red
                    </p>
                </div>
            </div>
        );
    }
}

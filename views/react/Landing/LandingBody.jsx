import React from 'react';
import styles from './landing_body.scss';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div className={styles.body}>
                This is the body>
                <div className={styles.avatar}>
                    <img src="static/resources/img/landing.jpg"/>
                </div>
            </div>
        );
    }
}

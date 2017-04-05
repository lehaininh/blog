import React from 'react';
import styles from './travel_body.scss';

export default class TravelBody extends React.Component {
    render() {
        return (
            <div className={styles.body}>
                <div className={styles.avatar}>
                    <img src="static/resources/img/landing.jpg"/>
                    <p className={styles.description}>
                        <span className="fa fa-location-arrow"></span> Hanoi, Vietnam<br />
                        Rubik solver. Competitive programmer. 35mm shooter.<br/>
                        Javascript developer @ Felizz. <br />
                        Travel. Movie nights. Hangover (once in a while..).<br />
                    </p>
                    <div className={styles.social_account}>
                        <p>Click-bait(s)</p>
                        <a className="fa fa-twitter social-icon"
                            aria-hidden="true" target="_blank"
                            href="https://twitter.com/lxhxxnxxx"
                        >
                        </a>
                        <a className="fa fa-instagram social-icon"
                            aria-hidden="true" target="_blank"
                            href="https://www.instagram.com/lxhxxnxxx/"
                        >
                        </a>
                        <a className="fa fa-linkedin social-icon"
                            aria-hidden="true" target="_blank"
                            href="https://www.linkedin.com/in/lehaininh/"
                        >
                        </a>
                        <a className="fa fa-google social-icon"
                            aria-hidden="true" target="_blank"
                            href="mailto:ninh.contact@gmail.com"
                        >
                        </a>
                        <a className="fa fa-quora social-icon"
                            aria-hidden="true" target="_blank"
                            href="https://www.quora.com/profile/Le-Hai-Ninh"
                        >
                        </a>
                        <a className="fa fa-pinterest social-icon"
                            aria-hidden="true" target="_blank"
                            href="https://www.pinterest.com/lehaininh"
                        >
                        </a>
                        <a className="fa fa-skype social-icon"
                            aria-hidden="true" target="_blank"
                            href="skype:lxhxxnxxx?add"
                        >
                        </a>
                        <a className="fa fa-medium social-icon"
                            aria-hidden="true" target="_blank"
                            href="https://medium.com/@lehaininh"
                        >
                        </a>
                        <a className="fa fa-lastfm social-icon"
                            aria-hidden="true" target="_blank"
                            href="https://www.last.fm/user/lxhxxnxxx"
                        >
                        </a>
                        <a className="fa fa-github social-icon"
                            aria-hidden="true" target="_blank"
                            href="https://github.com/lehaininh"
                        >
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

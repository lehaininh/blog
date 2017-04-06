import React from 'react';
import styles from './landing_header.scss';
import CSSModules from 'react-css-modules';

class LandingHeader extends React.Component {
    render() {
        return (
            <div>
                <ul styleName="menu">
                    <li styleName="menu_item">
                        <a href="/travel">Travel</a>
                    </li>
                    <li styleName="menu_item">Programming</li>
                    <li styleName="menu_item">Others</li>
                </ul>
                <div styleName="clearfix"></div>
            </div>
        );
    }
}

export default CSSModules(LandingHeader, styles, {allowMultiple: true});

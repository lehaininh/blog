import React from 'react';
import TravelHeader from './TravelHeader.jsx';
import TravelPostList from './TravelPostList.jsx';
import TravelWidget from './TravelWidget.jsx';
import TravelFooter from './TravelFooter.jsx';
import CSSModules from 'react-css-modules';

import styles from './travel.scss';


class TravelPage extends React.Component {
    render() {
        return (
            <div styleName="container">
                <TravelHeader />
                <div>
                    <TravelPostList />
                    <TravelWidget />
                    <div styleName="clearfix"></div>
                </div>
                <TravelFooter />
            </div>
        );
    }
}

export default CSSModules(TravelPage, styles, {allowMultiple: true});

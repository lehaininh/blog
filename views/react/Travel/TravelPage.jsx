import React from 'react';
import TravelHeader from './TravelHeader.jsx';
import TravelBody from './TravelBody.jsx';
import CSSModules from 'react-css-modules';

import styles from './travel.scss';


class TravelPage extends React.Component {
    render() {
        return (
            <div styleName="container">
                <TravelHeader />
                <TravelBody />
            </div>
        );
    }
}

export default CSSModules(TravelPage, styles, {allowMultiple: true});

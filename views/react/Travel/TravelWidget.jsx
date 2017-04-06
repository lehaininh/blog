import React from 'react';
import styles from './travel_widget.scss';
import CSSModules from 'react-css-modules';

class TravelWidget extends React.Component {
    render() {
        return (
            <div styleName="widget">
                this is the widget
            </div>
        );
    }
}

export default CSSModules(TravelWidget, styles, {allowMultiple: true});

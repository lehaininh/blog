import React from 'react';
import styles from './travel_footer.scss';
import CSSModules from 'react-css-modules';

class TravelFooter extends React.Component {
    render() {
        return (
            <div styleName="footer">
                this is a footer
            </div>
        );
    }
}

export default CSSModules(TravelFooter, styles, {allowMultiple: true});

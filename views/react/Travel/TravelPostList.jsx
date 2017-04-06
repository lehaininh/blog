import React from 'react';
import styles from './travel_post_list.scss';
import CSSModules from 'react-css-modules';

class TravelPostList extends React.Component {
    render() {
        return (
            <div styleName="post_list">
                this is the post list
            </div>
        );
    }
}

export default CSSModules(TravelPostList, styles, {allowMultiple: true});

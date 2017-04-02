import React from 'react';
import LandingHeader from './LandingHeader.jsx';
import LandingBody from './LandingBody.jsx';


export default class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <LandingHeader />
                <LandingBody />
            </div>
        );
    }
}

import React from 'react';
import TravelHeader from './TravelHeader.jsx';
import TravelBody from './TravelBody.jsx';


export default class TravelPage extends React.Component {
    render() {
        return (
            <div>
                <TravelHeader />
                <TravelBody />
            </div>
        );
    }
}

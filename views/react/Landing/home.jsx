import React from 'react';
import Test2 from './test2.jsx';
import Test1 from './test1.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Test1 />
                <Test2 />
            </div>
        );
    }
}

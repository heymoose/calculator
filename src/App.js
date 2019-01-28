import React, { Component } from 'react';
import Calculator from './containers/Calculator/Calculator';

class App extends Component {
    render() {
        return (
            <div className='app-container'>
                <Calculator />
            </div>
        );
    }
}

export default App;

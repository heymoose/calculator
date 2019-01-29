import React, { Component } from 'react';
import Calculator from './containers/Calculator/Calculator';
import style from './App.module.css';

class App extends Component {
    render() {
        return (
            <div className={style.AppContainer}>
                <Calculator />
            </div>
        );
    }
}

export default App;

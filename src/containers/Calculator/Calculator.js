import React, { Component } from 'react';
import style from './Calculator.module.css';
import '../../components/Display/Display';
import Display from '../../components/Display/Display';

class Calculator extends Component {
    state = {
        displayValue: '0',
        numbers: [],
        operators: [],
        selectedOperator: '',
        storedValue: ''
    };

    callOperator = () => {
        console.log('call operation');
    };

    setOperator = () => {
        console.log('set operation');
    };

    updateDisplay = () => {
        console.log('update display');
    };

    render() {
        const { displayValue } = this.state;

        return (
            <div className={style.CalculatorContainer}>
                <Display displayValue={displayValue} />
            </div>
        );
    }
}

export default Calculator;

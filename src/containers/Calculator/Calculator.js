import React, { Component } from 'react';
import style from './Calculator.module.css';
import '../../components/Display/Display';
import Display from '../../components/Display/Display';
import Keypad from '../../components/Keypad/Keypad';

class Calculator extends Component {
    state = {
        displayValue: '0',
        numbers: ['9', '8', '7', '6', '5', '4', '3', '2', '1', '.', '0', 'ce'],
        operators: ['/', 'x', '-', '+'],
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
        const { displayValue, numbers, operators } = this.state;

        return (
            <div className={style.CalculatorContainer}>
                <Display displayValue={displayValue} />
                <Keypad
                    callOperator={this.callOperator}
                    numbers={numbers}
                    operators={operators}
                    setOperator={this.setOperator}
                    updateDisplay={this.updateDisplay}
                />
            </div>
        );
    }
}

export default Calculator;

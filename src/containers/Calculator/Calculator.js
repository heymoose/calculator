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
        let { displayValue, selectedOperator, storedValue } = this.state;
        const updateStoredValue = displayValue;

        displayValue = parseInt(displayValue, 10);
        storedValue = parseInt(storedValue, 10);

        switch (selectedOperator) {
            case '+':
                displayValue = storedValue + displayValue;
                break;
            case '-':
                displayValue = storedValue - displayValue;
                break;
            case 'x':
                displayValue = storedValue * displayValue;
                break;
            case '/':
                displayValue = storedValue / displayValue;
                break;
            default:
                displayValue = '0';
        }

        displayValue = displayValue.toString();
        selectedOperator = '';

        if (displayValue === 'NaN' || displayValue === 'Infinity') {
            displayValue = '0';
        }

        this.setState({ displayValue, selectedOperator, storedValue: updateStoredValue });
    };

    setOperator = value => {
        let { displayValue, selectedOperator, storedValue } = this.state;

        if (selectedOperator === '') {
            storedValue = displayValue;
            displayValue = '0';
            selectedOperator = value;
        } else {
            selectedOperator = value;
        }

        this.setState({ storedValue, displayValue, selectedOperator });
    };

    updateDisplay = value => {
        let { displayValue } = this.state;

        if (value === '.' && displayValue.includes('.')) {
            value = '';
        }

        if (value === 'ce') {
            displayValue = displayValue.substr(0, displayValue.length - 1);

            if (displayValue === '') {
                displayValue = '0';
            }
        } else {
            displayValue = displayValue === '0' ? value : displayValue + value;
        }

        this.setState({ displayValue });
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

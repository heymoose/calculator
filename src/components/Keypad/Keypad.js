import React from 'react';
import Key from './Key/Key';
import keyStyle from './Key/Key.module.css';
import PropTypes from 'prop-types';
import style from './Keypad.module.css';

const Keypad = ({ callOperator, numbers, operators, setOperator, updateDisplay }) => {
    const numberKeys = numbers.map(number => (
        <Key
            key={number}
            keyAction={updateDisplay}
            keyType={keyStyle.NumberKey}
            keyValue={number}
        />
    ));

    const operatorKeys = operators.map(operator => (
        <Key
            key={operator}
            keyAction={setOperator}
            keyType={keyStyle.OperatorKey}
            keyValue={operator}
        />
    ));

    return (
        <div className={style.KeypadContainer}>
            <div className={style.NumbersContainer}>{numberKeys}</div>
            <div className={style.OperatorsContainer}>{operatorKeys}</div>
            <div className={style.SubmitContainer}>
                <Key keyAction={callOperator} keyType={keyStyle.SubmitKey} keyValue='=' />
            </div>
        </div>
    );
};

Keypad.propTypes = {
    callOperator: PropTypes.func.isRequired,
    numbers: PropTypes.array.isRequired,
    operators: PropTypes.array.isRequired,
    setOperator: PropTypes.func.isRequired,
    updateDisplay: PropTypes.func.isRequired
};

export default Keypad;

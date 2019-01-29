import React from 'react';
import PropTypes from 'prop-types';
import style from './Display.module.css';

const Display = ({ displayValue }) => (
    <div className={style.DisplayContainer}>
        <p className={style.DisplayValue}>{displayValue}</p>
    </div>
);

Display.propTypes = {
    displayValue: PropTypes.string.isRequired
};

export default Display;

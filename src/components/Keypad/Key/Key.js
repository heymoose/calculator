import React from 'react';
import PropTypes from 'prop-types';
import style from './Key.module.css';

const key = ({ keyAction, keyType, keyValue }) => (
    <div className={[style.KeyContainer, keyType].join(' ')} onClick={() => keyAction(keyValue)}>
        <p className={style.KeyValue}>{keyValue}</p>
    </div>
);

key.propTypes = {
    keyAction: PropTypes.func.isRequired,
    keyType: PropTypes.string.isRequired,
    keyValue: PropTypes.string.isRequired
};

export default key;

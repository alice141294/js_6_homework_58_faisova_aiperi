import React from 'react';

const Button = props => {
    const buttonClass = ['btn'];
    buttonClass.push('btn-' + props.type);


    return (
        <button
            type="button"
            className={buttonClass.join(' ')}
            onClick={props.clicked}>
            {props.label}
        </button>
    );
};

export default Button;
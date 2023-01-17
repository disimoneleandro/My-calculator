import React from 'react';
import '../Styles/Button.css';


const Button = (props) => {

  const isOperator = ( value ) => {
    return isNaN(value) && (value !== ".") && (value !== "=");
  };

  const isEquals = ( value ) => {
    return isNaN(value) && (value !== ".");
  }

  return (
    <div
       className={`button ${isOperator(props.children) ? 'operator' : isEquals(props.children) ? 'equals' : ''}`.trimEnd()}
       onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  )
}

export default Button;

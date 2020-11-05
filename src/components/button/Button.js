import React from "react";
import "./Button.css";

const STYLES = ["btn-primary", "btn--outline"];

const SIZE = ["btn--medium","btn--large", "btn--mobile", "btn--wide"];

const COLOR = ["primary", "blue", "red", "green", "yellow"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyles,
  buttonSize,
  buttonColor,
}) => {
  const checkButtonStyles = STYLES.includes(buttonStyles) ? buttonStyles : STYLES[0]
  const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];
  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

  return (
    <button
      className={`btn ${checkButtonStyles} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

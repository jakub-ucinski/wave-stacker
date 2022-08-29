import React, { FC } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "white" | "black";
}

const Button: FC<ButtonProps> = ({
  className: propClassName,
  variant,
  ...props
}) => {
  let className = styles.Button;
  propClassName && (className += ` ${propClassName}`);
  className += ` ${styles[variant]}`;

  return <button type="button" className={className} {...props} />;
};

export default Button;

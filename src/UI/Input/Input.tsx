import React, { FC } from "react";
import styles from "./Input.module.scss";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const TextInput: FC<TextInputProps> = ({
  className: propClassName,
  ...props
}) => {
  let className = styles.Input;
  propClassName && (className += ` ${propClassName}`);

  return <input className={className} {...props} />;
};

export default TextInput;

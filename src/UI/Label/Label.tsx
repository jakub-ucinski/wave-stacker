import React, { FC, LabelHTMLAttributes } from "react";
import styles from "./Label.module.scss";

const Label: FC<LabelHTMLAttributes<HTMLLabelElement>> = ({
  children,
  className: propClassName,

  ...props
}) => {
  let className = styles.Label;
  propClassName && (className += ` ${propClassName}`);

  return (
    <label className={className} {...props}>
      {children}
    </label>
  );
};

export default Label;

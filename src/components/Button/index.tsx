import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button = ({ label = 'button', ...rest }: ButtonProps) => {
  return <button {...rest}>{label}</button>;
};

export default Button;

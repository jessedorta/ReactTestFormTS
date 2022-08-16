import React from "react";
import './index.css';

type ButtonProps = { 
  type: 'button' | 'submit' | 'reset' | undefined, 
  css: string, 
  text: string
  onClick: (event: React.MouseEvent<HTMLElement>) => void, 
}

function Button({ type, css, onClick, text }: ButtonProps) {

  return (
    <span>
      <button type={type} className={css} onClick={onClick}> {text}</button>
    </span>
    );
  }


export default Button;
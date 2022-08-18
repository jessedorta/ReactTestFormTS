import React from "react";

import './index.css';

interface AlertProps{ type: string, text: string }

function Alert({type, text}: AlertProps) {
  return ( <div className={type}> {text} </div> );
}

export default Alert;
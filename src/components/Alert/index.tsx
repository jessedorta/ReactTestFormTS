import React from "react";

import './index.css';

interface AlertProps{ type: string, text: string }

function Alert({type, text}: AlertProps) {
  return ( 
    <div className={type}>
      <div className="alertIcon">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#ff4040" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div className="alertText">{text}</div>
    </div>
  );
}

export default Alert;
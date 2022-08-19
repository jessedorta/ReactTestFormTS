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
      <button type={type} className={css} onClick={onClick}>
        <div className="iconGroup">
        <>{type === 'button' && ( 
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        )}</>

        <>{type === 'submit' && ( 
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            </svg>
          </div>
        )}</>
        
        <>{type === 'reset' && ( 
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
         )}</>

        <div> {text} </div>

        </div>

      </button>
    </span>
    );
  }


export default Button;
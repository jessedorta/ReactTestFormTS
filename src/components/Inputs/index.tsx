import React from "react";

import './index.css'

type InputProps = { 
    name: string,
    type: 'text' | 'email' | undefined, 
    label: string, 
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void, 
  }

function Input({ name, type, label, value, onChange }: InputProps) {
    return ( 
        <div>
            <label>
            {label}:
            </label>
            <input type={type} value={value} name={name} onChange={onChange} />
            {type === 'email' && value && !/\S+@\S+\.\S+/.test(value) && (
                <div className="alert-email" data-testid="error-msg">
                    <small>Digite um email válido.</small>
                </div>

            )}
        </div>
    );
  }

export default Input;
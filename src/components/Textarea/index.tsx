import React from "react";

interface textProps{
    name: string,
    label: string, 
    value: string
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void, 
}

function Textarea({name, label, value, onChange}: textProps) {
    return ( 
        <div>
            <label>
            {label}:
            </label>
            <textarea value={value} name={name} onChange={onChange}></textarea>
        </div>
    );
  }

export default Textarea;
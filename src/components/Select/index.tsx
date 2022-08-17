import React from "react";

type SelectProps = { 
  name: string,
  label: string, 
  value?: string
  options: object,
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void, 
}

function Select({name, label, value, options, onChange}: SelectProps) {

    return ( 
    <div>
        <label>
        {label}:
        </label>
        <select name={name} onChange={onChange} value={value}>
          {Object.entries(options).map(([index, data]) => {
            return (<option key={index} value={data.value} >{data.label}</option>);
          })}

        </select>
    </div>
    );
  }

export default Select;
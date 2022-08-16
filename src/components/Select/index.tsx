import React from "react";

function Select(props: any) {

    return ( 
    <div>
        <label>
        {props.label}:
        </label>
        <select {...props}>
          {props.options && props.options.map((e:any, key: React.Key | null | undefined) => { 
            return <option key={key} value={e.value} >{e.label}</option>; 
          } )}
        </select>
    </div>
    );
  }

export default Select;
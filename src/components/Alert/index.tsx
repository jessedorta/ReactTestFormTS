import React from "react";

import './index.css';

function Alert(props: any) {
    return ( 
        <div className={props.type}>
            {props.text}
        </div>
    );
  }

export default Alert;
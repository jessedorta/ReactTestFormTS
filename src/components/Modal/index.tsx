import React, { useEffect, useState } from "react";

import './index.css'

import Button from "./../Button";

interface Props{
    title: string;
    type: string;
    formData: Object;
    onClick: any;
}

function Modal({title, formData, onClick}: Props) {

    const [modal, setModal] = useState(false);
    const handleReset = () => { 
        setModal(false); 
        onClick( handleReset ); 
    };
    useEffect(() => { setModal(modal); }, [modal]);

    return ( 
        <>
            <div className="cover" data-testid="alert-msg">
                <div className="alerta">
                    <div className="modal-bar">
                        <h3>{title}</h3>
                    </div>
                    <div className="text">
                        {/* {JSON.stringify(formData)} */}
                        {Object.entries(formData).map(([index, data]) => {
                            return ( <div key={index}> <p>{index}: {data}</p> </div> );
                        })}
                    </div>
                    <div className="buttons">
                        {modal}
                        <Button text="Fechar" type='button' css="btn dark pright" onClick={ handleReset } />
                    </div>
                </div>
            </div>
        </>
        
    );
  }

export default Modal;
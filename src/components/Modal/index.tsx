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
                        <div className="modal-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </div>
                        <div className="modal-title">
                            {title}
                        </div>
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
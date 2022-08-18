import React, { useState, useRef, useEffect } from "react";

import './index.css'

import Input from "./../Inputs";
import Button from "./../Button";
import Select from "./../Select";
import Textarea from "./../Textarea";
import Alert from "./../Alert";
import Modal from "./../Modal";

interface fieldsList{ fields: object }

function Form({ fields }: fieldsList) {

  const initialState = {};
  const form = useRef<HTMLFormElement>(null);

  const [alert, setAlert] = useState(false);
  const [modal, setModal] = useState(false);
  const [formData, setformData] = useState(initialState);
  const [formInputs, setFormInputs] = useState(initialState);

  function isEmptyObject(obj:any) {
    for(var prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        return false;
      }
    }
    return true;
  }

  function handleSubmit(event: React.MouseEvent<HTMLElement>){
    event.preventDefault();
    if (isEmptyObject(formInputs) == true) { 
      setformData(initialState);
      setFormInputs(initialState);
      setAlert(true);
      setModal(false);
    }else{
      setformData(formInputs)
      setFormInputs(initialState);
      setAlert(false);
      setModal(true);
    }
   
  }

  function changeValue(event: { target: { name: any; value: any; }; }){
    setFormInputs((formInputs) => ({ ...formInputs, [event.target.name]: event.target.value }))
  }

  const options= [
      { value:'', label: 'Selecione'},
      { value:'AC', label: 'Acre'},
      { value:'AL', label: 'Alagoas'},
      { value:'AP', label: 'Amapá'},
      { value:'AM', label: 'Amazonas'},
      { value:'BA', label: 'Bahia'},
      { value:'CE', label: 'Ceará'},
      { value:'DF', label: 'Distrito Federal'},
      { value:'ES', label: 'Espírito Santo'},
      { value:'GO', label: 'Goiás'},
      { value:'MA', label: 'Maranhão'},
      { value:'MT', label: 'Mato Grosso'},
      { value:'MS', label: 'Mato Grosso do Sul'},
      { value:'MG', label: 'Minas Gerais'},
      { value:'PA', label: 'Pará'},
      { value:'PB', label: 'Paraíba'},
      { value:'PR', label: 'Paraná'},
      { value:'PE', label: 'Pernambuco'},
      { value:'PI', label: 'Piauí'},
      { value:'RJ', label: 'Rio de Janeiro'},
      { value:'RN', label: 'Rio Grande do Norte'},
      { value:'RS', label: 'Rio Grande do Sul'},
      { value:'RO', label: 'Rondônia'},
      { value:'RR', label: 'Roraima'},
      { value:'SC', label: 'Santa Catarina'},
      { value:'SP', label: ' São Paulo '},
      { value:'SE', label: 'Sergipe'},
      { value:'TO', label: 'Tocantins'},
      { value:'EX', label: 'Estrangeiro'},
  ];

  function handleReset() {
    if (form.current != null) { form.current.reset(); }
    setFormInputs(initialState)
    setformData(initialState)
    setAlert(false);
    setModal(false);
  }

  useEffect(() => { if (form.current != null) { form.current.reset(); } }, []);
    return ( 
        <div className="container">

        <form id="dataForm" ref={form}>
          <>{alert === true && ( <Alert type="alert-warning" text="Necessário preencher todos os dados!"/> ) }</>
          {/* <>{JSON.stringify(formInputs)}</> */}
          {Object.entries(fields).map(([index, data]) => {
            return (
              <div key={data.uuid}>
                <>{data.type === 'STRING' && ( <Input name={index} type="text" label={data.display_text.des} onChange={changeValue} /> ) }</>
                <>{data.type === 'SELECT' && ( <Select name={index} label={data.display_text.des} options={options} onChange={changeValue}  /> ) }</>
                <>{data.type === 'TEXTAREA' && ( <Textarea name={index} label={data.display_text.des} onChange={changeValue} /> ) }</>
              </div>
            );
          })}
          <div className="buttons">
            <Button text="Enviar" type='button' css="btn primary" onClick={ handleSubmit } />
            <Button text="Limpar" type='reset' css="btn warning" onClick={ handleReset } />
          </div>
        </form>

        <>{modal === true && ( <Modal title="Dados do formulário" type="primary" formData={formData} onClick={ handleReset } /> ) }</>
      </div>
    );
  }

export default Form;
import React, { useState } from "react";

import './index.css'
// import mockData from "./Data";

import Input from "./../Inputs";
import Button from "./../Button";
import Select from "./../Select";
import Textarea from "./../Textarea";
import Alert from "./../Alert";
import Modal from "./../Modal";

function Form() {

  const [alert, setAlert] = useState(false);
  const [modal, setModal] = useState(false);
  const [formData, setformData] = useState({});
  const [name, setName] = useState('Jessé');
  const [lastName, setLastName] = useState('Dorta');
  const [email, setEmail] = useState('teste@teste.com');
  const [estado, setEstado] = useState('SC');
  const [obs, setObs] = useState('Teste de observação');

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

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (name) {
      setModal(true);
      setAlert(false);
      let tempData :{ label: string, value: string }[] = [
        { "label":'Nome', "value": name},
        { "label":'Sobrenome', "value": lastName},
        { "label":'Email', "value": email},
        { "label":'Estado', "value": estado},
        { "label":'Observação', "value": obs},
      ]
      setformData(tempData)
    } else {
      setAlert(true);
    }
    
  };

      
    function handleReset() {
      setName('');
      setLastName('');
      setEmail('');
      setEstado('')
      setObs('');
      setAlert(false);
      setModal(false);
    }

    return ( 
        <div className="container">

        <form id="dataForm">
            
            <>{alert === true && ( <Alert type="alert-warning" text="Necessário preencher todos os dados!"/> ) }</>
            
            <Input name="name" type="text" label="Nome" value={name} onChange={(event: any) => setName(event.target.value)} />
            <Input name="lastname" type="text" label="Sobrenome" value={lastName} onChange={(event:any) => setLastName(event.target.value)} />
            <Input name="email" type="email" label="Email" value={email} onChange={(event:any) => setEmail(event.target.value)} />

            <Select name="estado" label="Estado" value={estado} options={options}  onChange={(event:any) => setEstado(event.target.value)}  />

            <Textarea name="obs" label="Observação" value={obs} onChange={(event: any) => setObs(event.target.value)} />

            <div className="buttons">
              <Button text="Enviar" type='button' css="btn primary" onClick={ handleSubmit } />
              <Button text="Limpar" type='button' css="btn warning" onClick={ handleReset } />
            </div>

        </form>
        <>{modal === true && ( <Modal title="Dados do formulário" type="primary" formData={formData} onClick={ handleReset } /> ) }</>
      </div>
    );
  }

export default Form;
import React, { useState, useEffect } from "react";
import api from './services/api'
import Loader from './components/Loader'

import './index.css';

import Form from './components/Form'

function App() {

  const [load, setLoad] = useState(false);
  const [formName, setFormName] = useState('Aguarde...');
  const [fields, setFields] = useState([]);

  useEffect(()=>{
    async function LoadFormFields(){
      setLoad(true); 
      const response = await api.get("/b/62f2391ea1610e6386f5a283", {
        params: { meta: false },
        headers:{
              "X-Master-Key": "$2b$10$/G0EwpmGf2wDNh.vku8HsuTbQikoLMEHlgwDJEeq5WvfedjPyVFL6",
              "X-Access-Key": "$2b$10$Wzo1AKgkaCNlvzPT8LpqEeHDt97S6vsZ0yD04RXYLsT89NC6MrRLO",
          }
      })
      setLoad(false);
      setFormName(response.data.data.metadata.object_class.des)
      setFields(response.data.data.metadata.object_class.fields)
      // console.log(response.data.data.metadata.object_class.fields)
    }
    LoadFormFields();
}, [])

  return (
    <div className="App">
      <div className="formTitle">
        <div className="iconForm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h1 className="textTitle">
              <strong>{formName}</strong>
          </h1>
        </div>
      </div>
      
      
      <Form fields={fields} />
      <>{load === true && ( <Loader /> ) }</>
    </div>
  );
}

export default App;

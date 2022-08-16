import React, { useState, useEffect } from "react";
import api from './services/api'

import './index.css';

import Form from './components/Form'

function App() {

  useEffect(()=>{
    async function LoadFilmes(){
        const response = await api.get("/b/62f2391ea1610e6386f5a283", {
          params: {
            meta: false
          },
          headers:{
                "X-Master-Key": "$2b$10$/G0EwpmGf2wDNh.vku8HsuTbQikoLMEHlgwDJEeq5WvfedjPyVFL6",
                "X-Access-Key": "$2b$10$Wzo1AKgkaCNlvzPT8LpqEeHDt97S6vsZ0yD04RXYLsT89NC6MrRLO",
            }
        })
        console.log(response.data.results.slice(0, 10))
        // setFilmes(response.data.results.slice(0, 10))
    }
    LoadFilmes();
}, [])

  return (
    <div className="App">
      <h1 className="">
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M15.95 35.5h16.1v-3h-16.1Zm0-8.5h16.1v-3h-16.1ZM11 44q-1.2 0-2.1-.9Q8 42.2 8 41V7q0-1.2.9-2.1Q9.8 4 11 4h18.05L40 14.95V41q0 1.2-.9 2.1-.9.9-2.1.9Zm16.55-27.7V7H11v34h26V16.3ZM11 7v9.3V7v34V7Z" />
          </svg>
          <strong>Formulário</strong>
      </h1>
      <h2>Preencha seus dados</h2>
      <Form />
    </div>
  );
}

export default App;

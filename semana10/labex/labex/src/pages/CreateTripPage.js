import React from "react";
import { useHistory } from "react-router-dom";
import { goHomePage, goToLastPage } from "../routes/coordinator";
import useForm from "../hooks/useForm";
import { Formularios } from "./styles";

const CreateTripPage = () => {
  const {form, onChange, cleanFields }  = useForm ({

    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  })
  
  const criarNovasViagens = (event) => {
    event.preventDefault();
cleanFields();

  };
    const history = useHistory();
    return (
      <div>
      <button onClick={() => goHomePage(history)} >Home Page</button>
      <button onClick={() => goToLastPage(history)} >Voltar</button>

       <h1>Crie Novas Viagens!</h1>
       <Formularios onSubmit={criarNovasViagens}>
       <input 
       name= {"name"}
       value={form.name} 
       onChange={onChange} 
       placeholder="Nome da Viagem"
       required
      
       />
        <input 
       name= {"planet"}
       value={form.planet} 
       onChange={onChange} 
       placeholder="Planeta"
       required
       
      
       />
       <input 
       name= {"date"}
       value={form.date} 
       onChange={onChange} 
       placeholder="Data da viagem"
       required
       type={"date"}
       
      
       />
       <input 
       name= {"description"}
       value={form.description} 
       onChange={onChange} 
       placeholder="Descrição da viagem"
       required
       
             />
        <input 
       name= {"durationInDays"}
       value={form.durationInDays} 
       onChange={onChange} 
       placeholder="Tempo da viagem em dias"
       required
      type="number"
       
             />
             <button>Inscrever</button>
       </Formularios>
       
      </div>
    );
  }

  export default CreateTripPage;
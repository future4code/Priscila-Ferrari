import React from "react";
import { useHistory } from "react-router-dom";
import { goAdminHomePage, goHomePage, goToLastPage } from "../routes/coordinator";
import useForm from "../hooks/useForm";
import { Formularios } from "./styles";

const ApplicationFormPage = () => {
  const {form, onChange, cleanFields }  = useForm ({

    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  })
  
  const inscrever = (event) => {
    event.preventDefault();
cleanFields();

  };


    const history = useHistory();
    return (
      <div>
        <button onClick={() => goHomePage (history)} >Home Page</button>
       <button onClick= {() => goAdminHomePage(history)} >Administrativo</button>
       <button onClick={() => goToLastPage(history)} >Voltar</button>
       
       <h1>Ficha de Inscrição</h1>
       <Formularios onSubmit={inscrever}>
       <input 
       name= {"name"}
       value={form.name} 
       onChange={onChange} 
       placeholder="Nome"
       required
      
       />
        <input 
       name= {"age"}
       value={form.age} 
       onChange={onChange} 
       placeholder="Idade"
       required
       type={"number"}
       min= {18}
      
       />
       <input 
       name= {"applicationText"}
       value={form.applicationText} 
       onChange={onChange} 
       placeholder="Diga por que você quer ir!"
       required
       
      
       />
       <input 
       name= {"profession"}
       value={form.profession} 
       onChange={onChange} 
       placeholder="Profissão"
       required
       
             />
             <button>Inscrever</button>
       </Formularios>
      </div>
    );
  }

  export default ApplicationFormPage;
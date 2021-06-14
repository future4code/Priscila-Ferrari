import React from "react";
import { useHistory } from "react-router-dom";
import { goAdminHomePage, goHomePage } from "../routes/coordinator";
import useForm from "../hooks/useForm";
import useInput from "../hooks/useInput";
{/* <button onClick={() =>goAdminHomePage(history)} >Logar</button> */}

const LoginPage = () => {
  const {form, onChange, cleanFields }  = useForm ({
    email: "",
    password: ""
  })
  
  const logar = (event) => {
    event.preventDefault();
cleanFields();

  };
    const history = useHistory();
    
    
    return (

      <div>
        <button onClick={() => goHomePage(history)} >Home Page</button>
       
       <h1>LoginPage</h1>
      <form onSubmit={logar}>
       <div><input 
       name= {"email"} 
       value={form.email} 
       onChange={onChange} 
       placeholder="Email"
       required
       type={"email"}
       /></div>

       <div><input 
       name= {"password"}
       value={form.password} 
       onChange={onChange} 
       placeholder="Senha"
       required
       type={"password"}
       pattern={"^.{6,}"}
       title={"A senha deve ter 6 caracteres"}
       /></div>

       <button>Logar</button>
       
       </form>
      </div>
    );
  }

  export default LoginPage;
import React from "react";
import useForm from "../../hooks/useForm"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { signUp } from "../../services/users";
import { useHistory } from 'react-router-dom'
import { goHomePage } from "../../routes/coordinator";

const SignUpPage = ({setRightButtonText}) => {
  const history = useHistory()
  useUnprotectedPage()

  const {form,onChange,clear} = useForm({username:"", email:"", password:""})

  const onSubmitForm = (event) =>{
    event.preventDefault()
    signUp(form, clear, history,setRightButtonText)
  }
  return (
    <div>
      <h2>SignUp Page<button onClick={() => goHomePage(history)}>HomePage</button></h2>
      <div>
        <form setRightButtonText={setRightButtonText} onSubmit={onSubmitForm}>
        <input 
        placeholder="Nome de Usuário"
        name={"username"}
        value={form.username}
        onChange={onChange}
        required
        
        />
        <input 
        placeholder="Email" 
        name={"email"}
        value={form.email}
        onChange={onChange}
        required
        type={"email"}
        />
        <input 
        placeholder="Senha" 
        name={"password"}
        value={form.password}
        onChange={onChange}
        required
        type={"password"}
        />
        <div><button type= {"submit"}>Cadastrar</button></div>
        </form>
      </div>
      
    </div>
  );
}

export default SignUpPage;
import React from "react";
import useForm from "../../hooks/useForm"

const SignUpPage = () => {
  const [form,onChange,clear] = useForm({username:"",email:"",password:""})

  const onSubmitForm = (event) =>{
    event.preventDefault()
  }
  return (
    <div>
      <h2>SignUp Page<button>HomePage</button></h2>
      <div>
        <form onSubmitForm={onSubmitForm}>
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
        <div><button>Cadastrar</button></div>
        </form>
      </div>
      
    </div>
  );
}

export default SignUpPage;
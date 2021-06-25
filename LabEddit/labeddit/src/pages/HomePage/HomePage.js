import React from "react";
import { useHistory } from "react-router-dom";
import { goSignUpPage } from "../../routes/coordinator";
import Button from '@material-ui/core/Button';
import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../constants/urls";
import axios from "axios"



const HomePage = () => {
    const [form,onChange,clear] = useForm({email:"",password:""})
    const onSubmitForm = (event) => {
        event.preventDefault()
        login()
    }
    const login = () => {
        axios.post(`${BASE_URL}/users/login`,form,{headers: { 
            'Content-Type': 'application/json'
        }})
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    }

    const history = useHistory();
    return (
        <div>
            <h2>Home Page</h2>
            <div>
            <form onSubmit={onSubmitForm}>
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
            <div><Button type={"submit"} variant="contained" color="primary" >Entrar</Button></div>
            </form>
            </div>

            
            <div><Button variant="contained" color="primary" onClick={() => goSignUpPage(history)}>Não possui conta? Cadastre-se!</Button></div>
        </div>
    );
}

export default HomePage;
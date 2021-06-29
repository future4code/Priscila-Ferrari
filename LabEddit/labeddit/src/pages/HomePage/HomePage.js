import React from "react";
import { useHistory } from "react-router-dom";
import { goSignUpPage } from "../../routes/coordinator";
import Button from '@material-ui/core/Button';
import useForm from "../../hooks/useForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import {login} from "../../services/users"



const HomePage = ({rightButtonText,setRightButtonText}) => {
    useUnprotectedPage()
    const {form, onChange, clear} = useForm({email:"", password:""})

    const history = useHistory();

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear,history,setRightButtonText)
    }
    

    
    return (
        <div>
            <h2>Home Page</h2>
            <div>
            <form rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} onSubmit={onSubmitForm}>
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
import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goPostPage } from "../routes/coordinator"

export const login = (body, clear, history,setRightButtonText) => {
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        clear()
        goPostPage(history)
        setRightButtonText("Logout")
    })
    .catch((err)=>alert(err.response.data.message))
    clear();
    }

    export const signUp = (body,clear,history,setRightButtonText) => {
        axios.post(`${BASE_URL}/users/signup`,body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goPostPage(history)
        })
        .catch((err) => {
        alert (err.response.data.message)
        clear()
        setRightButtonText("Logout")
        })
    }
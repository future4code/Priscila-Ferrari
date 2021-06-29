import { useHistory } from "react-router";
import { useLayoutEffect } from "react";
import { goHomePage } from "../routes/coordinator";

const useProtectedPage = () => {
    const history = useHistory()
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if (!token){
            goHomePage(history)
        }
    },[history]) 
}

export default useProtectedPage
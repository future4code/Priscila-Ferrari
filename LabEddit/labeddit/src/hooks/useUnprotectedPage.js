import { useHistory } from "react-router";
import { useLayoutEffect } from "react";
import { goPostPage } from "../routes/coordinator";

const useUnprotectedPage = () => {
    
    const history = useHistory()
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if (token){
            goPostPage(history)
        }
    },[history]) 
}

export default useUnprotectedPage
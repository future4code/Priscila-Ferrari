import axios from "axios"
import { useEffect,useState } from "react"

const Heads = () => {
    const header = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }
    return header

const useRequestData = (initialData, url) => {
    const[data,setData] = useState(initialData)

    useEffect(() => {
        axios.get(url, header()
        )
        .then((response) =>{
            setData(response.data)
        })
        .catch((error)=>{
            console.log(error)
            alert(error.response.data)
        })
    },[url])
    return (data)
}

export default useRequestData
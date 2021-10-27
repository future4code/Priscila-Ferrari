import React from "react"
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import useRequestData from "../../hooks/useRequestData";
import { MoviesContainer } from "./styled";
import { BASE_URL } from "../../constants/urls";
import { API_KEY } from "../../constants/API_KEY";

const HomePage = () => {

    const movies = useRequestData([],`${BASE_URL}/popular?api_key=${API_KEY}`)
    console.log(movies)

   
    

    return(
        <div>
        <Header />
        <MoviesContainer> 
           <Card 
           title={"Batata"}
           image={"https://picsum.photos/200"}
           onClick={() => null}
           />
           
         </MoviesContainer>
        
        </div>
    );
}

export default HomePage;
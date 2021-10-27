import React from "react"
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import useRequestData from "../../hooks/useRequestData";
import { MoviesContainer } from "./styled";

const HomePage = () => {

    
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
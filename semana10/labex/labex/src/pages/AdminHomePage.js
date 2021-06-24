import React from "react";
import { useHistory } from "react-router-dom";
import { goHomePage, goCreateTripPage, goTripDetailsPage } from "../routes/coordinator";


const AdminHomePage = () => {
    const history = useHistory();
    return (
    
      <div>
        <button onClick={() => goHomePage(history)}>Home Page</button>
        <button onClick={history.goBack} >Voltar</button>
       <h1>Seja Bem-Vindo Administrador!</h1>
       
       <button onClick={() => goTripDetailsPage(history)} >Lista de viagens</button>
       <button onClick={() => goCreateTripPage(history)} >Criar Viagens</button>
       
      </div>
    );
  }

  export default AdminHomePage;
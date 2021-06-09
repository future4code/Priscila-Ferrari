import React from "react";
import { useHistory } from "react-router-dom";
import { goHomePage, goCreateTripPage, goTripDetailsPage } from "../routes/coordinator";

const AdminHomePage = () => {
    const history = useHistory();
    return (
      <div>
       AdminHomePage
       <button onClick={() => goHomePage(history)}>Home Page</button>
       <button onClick={() => goTripDetailsPage(history)} >Lista de viagens</button>
       <button onClick={() => goCreateTripPage(history)} >Criar Viagens</button>
       <button onClick={history.goBack} >Voltar</button>
      </div>
    );
  }

  export default AdminHomePage;
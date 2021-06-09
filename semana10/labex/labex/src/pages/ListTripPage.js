import React from "react";
import { useHistory } from "react-router-dom";
import { goApplicationFormPage, goHomePage, goLoginPage, goTripDetailsPage } from "../routes/coordinator";

const ListTripPage = () => {
    const history = useHistory();
    return (
      <div>
       ListTripPage

       <button onClick={() => goHomePage(history)} >Home Page</button>
       <button onClick={() => goLoginPage(history)} >Area Administrativa</button>
       <button onClick={() => goApplicationFormPage(history)} >Aplicação para viagens</button>
       <button onClick={() => goTripDetailsPage(history)} >Detalhes da Viagem</button>
      </div>
    );
  }

  export default ListTripPage;
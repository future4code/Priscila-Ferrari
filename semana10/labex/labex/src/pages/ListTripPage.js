import React from "react";
import { useHistory } from "react-router-dom";
import { goApplicationFormPage, goHomePage, goLoginPage, goTripDetailsPage } from "../routes/coordinator";

const ListTripPage = () => {
    const history = useHistory();
    return (
      <div>
<button onClick={() => goHomePage(history)} >Home Page</button>
       <button onClick={() => goLoginPage(history)} >Area Administrativa</button>
      <h1>
       ListTripPage
       </h1>
       
       
       <button onClick={() => goApplicationFormPage(history)} >Aplicação para viagens</button>
       
       </div>
    );
  }

  export default ListTripPage;
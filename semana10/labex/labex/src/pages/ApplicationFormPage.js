import React from "react";
import { useHistory } from "react-router-dom";
import { goAdminHomePage, goHomePage, goToLastPage } from "../routes/coordinator";

const ApplicationFormPage = () => {
    const history = useHistory();
    return (
      <div>
       ApplicationFormPage

       <button onClick={() => goHomePage (history)} >Home Page</button>
       <button onClick= {() => goAdminHomePage(history)} >Administrativo</button>
       <button onClick={() => goToLastPage(history)} >Voltar</button>
      </div>
    );
  }

  export default ApplicationFormPage;
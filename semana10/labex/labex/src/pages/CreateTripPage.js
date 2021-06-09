import React from "react";
import { useHistory } from "react-router-dom";
import { goHomePage, goToLastPage } from "../routes/coordinator";

const CreateTripPage = () => {
    const history = useHistory();
    return (
      <div>
       CreateTripPage

       <button onClick={() => goHomePage(history)} >Home Page</button>
       <button onClick={() => goToLastPage(history)} >Voltar</button>
      </div>
    );
  }

  export default CreateTripPage;
import React from "react";
import { useHistory } from "react-router-dom";
import { goAdminHomePage, goHomePage } from "../routes/coordinator";

const LoginPage = () => {
    const history = useHistory();
    return (
      <div>
       LoginPage

       <button onClick={() => goHomePage(history)} >Home Page</button>
       <button onClick={() =>goAdminHomePage(history)} >Pagina administrativa depois de logar</button>
      </div>
    );
  }

  export default LoginPage;
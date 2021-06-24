import React from "react";
import { useHistory } from "react-router-dom";


const ErrorPage = () => {
    const history = useHistory();
    return (
      <div>
       Página não encontrada!! :(
       <button onClick={history.goBack} >Area Administrativa</button>
       
      </div>
    );
  }

  export default ErrorPage;
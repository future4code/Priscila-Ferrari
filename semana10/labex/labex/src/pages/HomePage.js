import React from "react";
import { useHistory } from "react-router-dom";
import { goListTripPage, goLoginPage } from "../routes/coordinator";

const HomePage = () => {
    const history = useHistory();
    return (
      <div>
       HomePage
       <div><button onClick={() =>goLoginPage(history)} >Area Administrativa</button>
       <button onClick={() =>goListTripPage(history)} >Lista de Viagens</button></div>
      </div>
    );
  }

  export default HomePage;
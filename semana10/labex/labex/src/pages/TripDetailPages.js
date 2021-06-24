import React from "react";
import { useHistory } from "react-router-dom";
import { goHomePage, goLoginPage } from "../routes/coordinator";

const TripDetailsPage = () => {
    const history = useHistory();
    return (
      <div>
       TripDetailsPage

       <button onClick={() => goHomePage(history)} >Home Page</button>
       <button onClick={() => goLoginPage(history)} >Area Administrativa</button>
      </div>
    );
  }

  export default TripDetailsPage;
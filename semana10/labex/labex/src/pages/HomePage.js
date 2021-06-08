import React from "react";
import {Switch, Router, BrowserRouter} from 'react-router-dom';

const HomePage = () => {
    const history = useHistory();
    return (
      <div>
       HomePage
       <button>Area Administrativa</button>
       <button>Lista de Viagens</button>
      </div>
    );
  }

  export default HomePage;
import React from "react";
import {Switch, Router, BrowserRouter} from 'react-router-dom';

const ApplicationFormPage = () => {
    const history = useHistory();
    return (
      <div>
       ApplicationFormPage

       <button>Home Page</button>
       <button>Administrativa</button>
      </div>
    );
  }

  export default ApplicationFormPage;
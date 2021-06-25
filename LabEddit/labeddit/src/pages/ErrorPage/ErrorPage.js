import React from "react";
import { useHistory } from "react-router-dom";
import { goHomePage } from "../../routes/coordinator";

const ErrorPage = () => {
  const history = useHistory();
  return (
    <div>
      <h2>Error Page<button onClick={() => goHomePage(history)}>HomePage</button></h2>

      <h3> TENTE NOVAMENTE!!</h3>
    </div>
  );
}

export default ErrorPage;
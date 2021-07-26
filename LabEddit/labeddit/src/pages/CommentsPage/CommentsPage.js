import React from "react";
import { useHistory } from "react-router";
import useProtectedPage from "../../hooks/useProtectedPage";
import { goHomePage } from "../../routes/coordinator";

const CommentsPage = () => {
  useProtectedPage()
    const history = useHistory ();
  return (
    <div>
      <h1>Comments Page <button onClick={() => goHomePage(history)}>HomePage</button></h1>
      <div>
<div><input placeholder="Escreva seu Comentário"/></div>
<div><button>Postar Comentário</button></div>
</div>
    </div>
  );
}

export default CommentsPage;
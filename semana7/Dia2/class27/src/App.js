import React from 'react';
import axios from 'axios'

export default class App extends React.Component {
  state = {
  }
  const body = {
    name:"",
    email:""

axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',body,{
  headers:{
    Authorization:"priscila-ferrari-paiva"
  }
}).then((response) => {
console.log(response.data)
}).catch((error) => {
  console.log(error.response.data)
}

)sdf
}


  render() {

    return (
      <div>
        <div>
        <h1> Labenusers</h1>
        <button>Checar Usuários</button>
        </div>
        <div>
          <h2>Cadastre um Novo Usuário</h2>
        </div>
        <div>
          <p>
          Nome:
          <input type="text"></input>
          </p>
        </div>
        <div>
          <p>Email: 
          <input type="email"></input>
          </p>
        </div>
        <div>
          <button>Criar novo usuário</button>
        </div>
      </div>

        
    );
  }
}



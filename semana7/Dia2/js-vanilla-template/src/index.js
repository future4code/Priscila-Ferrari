import axios from 'axios';

axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',body,{
    headers:{
        Authorization: "priscila-ferrari-paiva"
    }
    }).then((res) => {
        console.log(response.data)
    }).catch((error) => {
        console.log(error.response.data)
    }
    )




render{
    return(
        <div>
           <h1>Labenusers</h1>
           <button>Trocar de página</button>

            <h2>Criar Usuários</h2>
            <input type="text"></input>
            <input type="email"></input>
            <button>Enviar</button>

        </div>

    )

}
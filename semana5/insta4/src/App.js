import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {
    listaDeUsuarios: [

      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: 'tomzinho',
        fotoUsuario: 'https://picsum.photos/50/50?random=1',
        fotoPost: 'https://picsum.photos/200/150?random=1'
      },
      {
        nomeUsuario: 'timzinho',
        fotoUsuario: 'https://picsum.photos/50/50?random=2',
        fotoPost: 'https://picsum.photos/200/150?random=2'
      }

    ],
  };
  render() {
    const listaDeUsuarios = this.state.listaDeUsuarios.map((user) => {
      return (
        <Post
          nomeUsuario={user.nomeUsuario}
          fotoUsuario={user.fotoUsuario}
          fotoPost={user.fotoPost}

        />
      );
    });

    return (
      <MainContainer>
        <div>{listaDeUsuarios}</div>
        
        </MainContainer>


    );
  }
}

export default App;

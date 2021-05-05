import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImgPerfil from './components/imagens/eu.jpg';
import Btcc from './components/imagens/btcc.png';
import Cise from './components/imagens/Ci.jpg';




function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ImgPerfil}
          nome="Priscila Ferrari" 
          descricao="Olá, eu sou a Priscila! Aluna apaixonada pela Labenu que sempre quis mudar de carreira e que sente muita dificuldade, ansiedade e que se recusa a desistir. Vou fazer um site DAQUELES quando terminar o curso!! "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={Cise}
          nome="Cultura Inglesa" 
          descricao="Trabalhei como supervisora de atendimento, liderando uma equipe no atendimento remoto e gerenciando as metas da empresa." 
        />
        
        <CardGrande 
          imagem={Btcc}
          nome="BTCC" 
          descricao="Fui supervisora de uma equipe do suporte técnico, fazendo a ponte entre necessidades do cliente e empresa e funcionários." 
        />
      </div>
      <div className="page-section-container">
        <h2> Contatos </h2>
        <CardPequeno
        email="priscila.carvalho@yahoo.com"
        endereco="Av. Pedro Ludovico, nº 455, Setor Bueno, Goiânia, Goiás"
        telefone="(62) 99988-7766"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;

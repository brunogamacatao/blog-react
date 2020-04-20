import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EnviarPostagemForm from './componentes/EnviarPostagemForm';
import ListaDePostagens from './componentes/ListaDePostagens';

function App() {
  const [postagens, setPostagens] = useState([]);

  const carregaPostagens = () => {
    axios.get('http://localhost:5000/postagens')
    .then(res => setPostagens(res.data));
  };

  const excluir = (postagem) => {
    axios.delete('http://localhost:5000/postagens/' + postagem._id)
    .then(res => carregaPostagens());
  };

  useEffect(() => {
    carregaPostagens();
  }, []);

  return (
    <>
      <EnviarPostagemForm onPostagemCriada={() => carregaPostagens()}/>
      <hr/>
      <ListaDePostagens postagens={postagens} 
                        onExcluir={(postagem) => excluir(postagem)}/>
    </>
  );
}

export default App;

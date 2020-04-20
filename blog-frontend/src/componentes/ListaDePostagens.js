import React from 'react';

function ListaDePostagens({postagens, onExcluir}) {
  const renderPostagem = (postagem) => {
    return (
      <li key={postagem._id}>
        <img src={postagem.avatar} alt="Foto do avatar" width="50px"/>
        {postagem.autor} - {postagem.titulo} <br/>
        {postagem.texto} <br/>
        <button onClick={() => onExcluir(postagem)}>Excluir</button>
      </li>
    );
  };

  return (
    <ul>{postagens.map(renderPostagem)}</ul>
  );
}

export default ListaDePostagens;

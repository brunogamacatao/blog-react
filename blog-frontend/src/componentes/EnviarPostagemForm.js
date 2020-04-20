import React, { useState } from 'react';
import axios from 'axios';

const criaFormEmBranco = () => {
  return {
    avatar: '',
    autor: '',
    titulo: '',
    texto: ''
  };
};

function EnviarPostagemForm({onPostagemCriada}) {
  const [form, setForm] = useState(criaFormEmBranco());

  const setValor = (evento, campo) => {
    setForm({...form, [campo]: evento.target.value});
  };

  const submeter = (evento) => {
    evento.preventDefault();
    axios.post('http://localhost:5000/postagens', form)
    .then(res => {
      setForm(criaFormEmBranco());
      onPostagemCriada();
    });
  };

  return (
    <>
      <form onSubmit={(e) => submeter(e)}>
        <p>
          <label>URL do avatar:</label>
          <input type="text" value={form.avatar} onChange={(e) => setValor(e, 'avatar')}/>
        </p>
        <p>
          <label>Autor:</label>
          <input type="text" value={form.autor} onChange={(e) => setValor(e, 'autor')}/>
        </p>
        <p>
          <label>Título:</label>
          <input type="text" value={form.titulo} onChange={(e) => setValor(e, 'titulo')}/>
        </p>
        <p>
          <label>Texto:</label>
          <textarea value={form.texto} onChange={(e) => setValor(e, 'texto')}>
          </textarea>
        </p>
        <p>
          <input type="submit" value="Enviar"/>
        </p>
      </form>
    </>
  );
}

export default EnviarPostagemForm;
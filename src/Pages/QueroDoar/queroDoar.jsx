import livro from "../../assets/queroDoar/Vector.png";
import React from 'react';
import axios from "axios";
import S from "./queroDoar.module.scss";

export default function queroDoar() {
  const [titulo, setTitulo] = React.useState("");
  const [categoria, setCategoria] = React.useState("");
  const [autor, setAutor] = React.useState("");
  const [imagem_url, setImagem] = React.useState("");

  const enviarDados = async() => {
    const urlApi = "https://api-livros-vnw-3gyx.onrender.com/doar"

    const dadosEnviar = {
      titulo,
      categoria,
      autor,
      imagem_url
    }

    await axios.post(urlApi,dadosEnviar)

    alert("Livro Enviado!")

    setTitulo("")
    setCategoria("")
    setAutor("")
    setImagem("")
  }

  const capturaTitulo = (e) => {
    setTitulo(e.target.value);
  };
  const capturaCategoria = (e) => {
    setCategoria(e.target.value);
    
  };
  const capturaAutor = (e) => {
    setAutor(e.target.value);
  };
  const capturaImagem = (e) => {
    setImagem(e.target.value);
  };

  return (
    <>
      <section>
        <section className={S.container}>
          <h2>
            Por favor, preencha o formulário com suas informações e as
            informações do Livro
          </h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <img src={livro} alt="" />
              <h3>Informações do Livro</h3>
            </div>
            <input type="text" placeholder="Titulo" onChange={capturaTitulo} value={titulo} />
            <input type="text" placeholder="Categoria" onChange={capturaCategoria} value={categoria}/>
            <input type="text" placeholder="Autor" onChange={capturaAutor} value={autor} />
            <input type="text" placeholder="Link da Imagem" onChange={capturaImagem} value={imagem_url} />
            <input type="submit" value="Doar" onClick={enviarDados} />
          </form>
        </section>
      </section>
    </>
  );
}

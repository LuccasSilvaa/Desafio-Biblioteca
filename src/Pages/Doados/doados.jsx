import React from "react";
import S from "./doados.module.scss";
import livro from "../../assets/doados/livro.png";
import axios from "axios";

export default function doados() {
  const [dados, setDados] = React.useState([]);
  const pegarDados = async () => {
    const Dados = await axios.get(
      "https://api-livros-vnw-3gyx.onrender.com/livros"
    );
    setDados(Dados.data);
  };
  React.useEffect(() => {
    pegarDados();
  }, [setDados]);

  return (
    <section className={S.containerDoados}>
      <h2>Livros Doados</h2>

      <section className={S.containerCard}>
        {dados.map((index) => (
          <article>
            <img src={index.imagem_url} alt="" />
            <h2>{index.titulo}</h2>
            <p>Autor: {index.autor}</p>
            <p>Categoria: {index.categoria}</p>
          </article>
        ))}
      </section>
    </section>
  );
}

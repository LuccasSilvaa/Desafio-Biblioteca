import S from "./doados.module.scss";
import livro from "../../assets/doados/livro.png";

export default function doados() {
  return (
    <section className={S.containerDoados}>
      <h2>Livros Doados</h2>

      <section className={S.containerCard}>
        <article>
          <img src={livro} alt="" />
          <h3>O Protagonista</h3>
          <p>Susanne Andrade</p>
          <p>Ficção</p>
        </article>

        <article>
          <img src={livro} alt="" />
          <h3>O Protagonista</h3>
          <p>Susanne Andrade</p>
          <p>Ficção</p>
        </article>

        <article>
          <img src={livro} alt="" />
          <h3>O Protagonista</h3>
          <p>Susanne Andrade</p>
          <p>Ficção</p>
        </article>
      </section>
    </section>
  );
}

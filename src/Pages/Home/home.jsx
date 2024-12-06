import banner from "../../assets/home/banner.png";
import community from "../../assets/home/community.png";
import reading from "../../assets/home/reading.png";
import transform from "../../assets/home/transform.png";
import balance from "../../assets/home/balance.png";

import S from "./home.module.scss";

export default function home() {
  return (
    <section>
      <section className={S.containerBanner}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>
      <section className={S.containerDoar}>
        <div>
          <h2>Por que devo doar?</h2>
        </div>
        <section className={S.boxCard}>
          <article>
            <img src={community} alt="" />
            <p>
              Oferece livros a quem não tem acesso, ajudando a reduzir a
              exclusão social.
            </p>
          </article>
          <article>
            <img src={reading} alt="" />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </article>
          <article>
            <img src={transform} alt="" />
            <p>
              Fornece conhecimento e inspiração, permitindo que indivíduos
              transformem suas vidas.
            </p>
          </article>
          <article>
            <img src={balance} alt="" />
            <p>
              Garante que todos, independentemente de sua condição, tenham
              oportunidades de aprendizado.
            </p>
          </article>
        </section>
      </section>
    </section>
  );
}

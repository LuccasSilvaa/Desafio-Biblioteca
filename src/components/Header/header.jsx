import logo from "../../assets/header/logo.png";
import search from "../../assets/header/search.png";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "../../Pages/Home/home";
import Doados from "../../Pages/Doados/doados";
import QueroDoar from "../../Pages/QueroDoar/queroDoar";
import S from './header.module.scss'

export default function header() {
  return (
    <BrowserRouter>
      <header>
        <section className={S.boxLogo}>
          <img src={logo} alt="imagem de um livro" />
          <h1>Livros Vai na Web</h1>
        </section>
        <nav className={S.navBar}>
          <ul>
            <li><Link to="/" className={S.link}>Inicio</Link></li>
            <li><Link to="/doados" className={S.link}>Livros Doados</Link></li>
            <li><Link to="/queroDoar" className={S.link}>Quero doar</Link></li>
          </ul>
        </nav>
        <div className={S.boxSearch}>
          <input type="text" />
          <img src={search} alt="imagem de uma lupa" />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doados" element={<Doados />} />
        <Route path="/queroDoar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  );
}

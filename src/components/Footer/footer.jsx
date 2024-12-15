import face from '../../assets/footer/facebook.png'
import insta from '../../assets/footer/instagram.png'
import youtube from '../../assets/footer/youtube.png'
import twitter from '../../assets/footer/twitter.png'
import linkedin from '../../assets/footer/linkedin.png'
import S from './footer.module.scss'




export default function footer(){
  return(
    <>
    
    <footer>
            <section className={S.containerContatos}>
                <h3>4002-8922</h3>
                <nav>
                   <a href=""> <img src={face} alt="imagem da logo do facebok" /> </a>

                   <a href=""> <img src={twitter} alt="imagem da logo do Twitter" /> </a>

                   <a href=""> <img src={youtube} alt="imagem da logo do youtube" /> </a>

                   <a href=""> <img src={linkedin} alt="imagem da logo do linkedin" /> </a>

                   <a href="">  <img src={insta} alt="imagem da logo do instagram" />  </a>
                </nav>
            </section>
            <section className={S.containerCreditos}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
    
    
    </>
  )
}
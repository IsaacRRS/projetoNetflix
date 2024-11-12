import playBotao from '../../assets/iconePLAY.png'
import infoBotao from '../../assets/iconeINFO.png'
import gato from '../../assets/ElGaton.jpg'
import subtitleGato from '../../assets/subtitulo.png'
import Navbar from '../../components/Navbar/Navbar'
import React from 'react'

const Home = () => {

  return (
    <div className='home'>
      <Navbar/>

      <div className='gato'>
        <img src={gato} className='imagemBanner' />

        <div className='subtitle'>

          <img src={subtitleGato} className='imagemSubtitle' />
          <p>Gato, gato gato gato! Gato gato gato? Gato, gato...... gato, gato gato gato gato! Gato gato gato, gato gato gato gato?!</p>
          
          <div className="botoes">

            <button className='btn'>
              <img src={playBotao} /> Assistir
            </button>
            <button className='btn dark-btn'>
              <img src={infoBotao} /> Saiba mais
            </button>

          </div>

        <Title/>

        </div>
      </div>

      <div className="fichasAdd">

        <Title title={"Originais Netflix"} categoria={"popular"} />
        <Title title={"Escolhas baseadas no seu perfil"} categoria={"now_playing"} />
        <Title title={"Nos Cinemas"} categoria={"top_rated"} />
        <Title title={"Em breve"} categoria={"upcoming"} />

      </div>
      
      <Footer />

    </div>
  )
}

export default Home

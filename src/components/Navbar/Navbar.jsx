import './Navbar.css'
import logo from '../../assets/logo.png'
import lembre from '../../assets/lembre.svg'
import select from '../../assets/select.svg'
import perfil from '../../assets/perfil.png'
import busca from '../../assets/busca.svg'
import React from 'react'
import { sair } from '../../firebase'

const Navbar = () => {

  return (

    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />

        <ul>
          <li>Home</li>
          <li>Filmes</li>
          <li>Séries</li>
          <li>Populares</li>
          <li>Minha lista</li>
        </ul>

      </div>

      <div className="navbar-right">

        <img className='icones' src={busca} alt="" />
    
        <img className='icones' src={lembre} alt="" />

        <div className="navbar-perfil">
          <img className='perfil' src={perfil} alt="" />
          <img src={select} alt="" />

          <div className="select">
            <p onClick={() => {sair()}}>Sair da conta</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Navbar

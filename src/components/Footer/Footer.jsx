import './Footer.css'
import facebookIcone from '../../assets/facebook.png'
import React from 'react'

const Footer = () => {
  return (

    <div className='footer'>
      
      <div className='iconeFooter'>
        <img src={facebookIcone} />
        <img src={facebookIcone} />
        <img src={facebookIcone} />
      </div>

      <ul>
        <li>Privacidade</li>
        <li>Termos de Uso</li>
        <li>Entre em Contato</li>
        <li>Privacidade</li>
        <li>Termos de Uso</li>
        <li>Entre em Contato</li>
        <li>Termos de Uso</li>
        <li>Entre em Contato</li>
      </ul>

      <p className='autoral'>© 2024 - 2024</p>

    </div>
  )
}

export default Footer

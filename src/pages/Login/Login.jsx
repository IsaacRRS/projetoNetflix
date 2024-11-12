import logo from '../../assets/logo.png'
import './Login.css'
import React, { useState } from 'react'
import { registro, login } from '../../firebase'

const Login = () => {

  const [defEstado, setDefEstado] = useState("Entre em sua conta");

  const usuario_auth = async (event) => {
    event.preventDefault();
    if(defEstado === "Entre em sua conta") {
      await login(email, senha);
    }
    else {
      await registro(nome, email, senha);
    }
  }

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");


  return (

    <div className='login'>

      <img src={logo} className='logoLogin' />
      <div className='form'>

        <h1>{defEstado}</h1>

        <form>
          
          {defEstado==="Registre-se"?<input value={nome} 
          onChange={(e) => {setNome(e.target.value)}} type="text" placeholder="Nome" />
          :<> </> }
          
          <input value={senha} 
          onChange={(e) => {setSenha(e.target.value)}} type="password" placeholder="Senha" />

          <input value={email} 
          onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Email" />

          <button onClick={usuario_auth} type="submit">{defEstado}</button>

          <div className="ajuda">
            <div className="opcoes">
              <input type="checkbox" />
              <label For="">Lembrar?</label>
            </div>
          </div>

        </form>

        <div className="mudar">
          
          {defEstado==="Entre em sua conta"?
          <p>Não possui uma conta? <span onClick={()=>{setDefEstado("Registre-se")}}>Crie uma conta!</span></p>
          :
          <p>Já possui uma conta? <span onClick={()=>{setDefEstado("Entre em sua conta")}}>Entre em sua conta!</span></p>}
        
        </div>
      </div>
    </div>
  )
}

export default Login


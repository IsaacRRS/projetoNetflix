import Login from './pages/Login/Login'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import React, { useEffect } from 'react'
import Player from './pages/Player/Player'

const App = () => {

  const nav = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if(user){
        console.log("Logado!")
        nav("/")
      }
      else{
        console.log("Deslogado!")
        nav("/login")
      }
    })
  },[])

  return (

    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id' element={<Player/>}/>
      </Routes>    
    </div>
  )
}

export default App

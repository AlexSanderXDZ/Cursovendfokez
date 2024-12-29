import React from 'react'
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <h2 className="logo">logo</h2>
      <nav className="navege">
        <a href="#">Inicio</a>
        <a href="#">Sobre</a>
        <a href="#">Cursos</a>
        <a href="#">Contato</a>
        <button className="btnloginpop">Logar</button>
      </nav>
    </header>
  )
}

export default Header

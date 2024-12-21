import React from 'react'
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
    <div className="container">
      <div className="logo">CondoView</div>
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#about">Sobre</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
      <button className="cta-button">Acesse Agora</button>
    </div>
  </header>
  )
}

export default Header

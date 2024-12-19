import React from 'react'
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Nome do Curso</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">Sobre</a></li>
            <li><a href="#courses">Cursos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
        <button className="cta-button">Inscreva-se</button>
      </div>
    </header>
  )
}

export default Header

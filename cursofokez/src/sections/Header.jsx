import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">CursoTop</h1>
      <nav className="nav">
        <a href="#courses" className="link">Cursos</a>
        <a href="#about" className="link">Sobre</a>
        <a href="#contact" className="link">Contato</a>
      </nav>
    </header>
  );
};

export default Header;

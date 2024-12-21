import React from 'react'
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Nome do Curso. Todos os direitos reservados.</p>
        <nav>
          <ul>
            <li><a href="#privacy">Política de Privacidade</a></li>
            <li><a href="#terms">Termos de Uso</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer

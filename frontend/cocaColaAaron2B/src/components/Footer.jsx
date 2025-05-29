import React from 'react';
import '../styles/Footer.css'; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4 className="footer-title">Productos</h4>
            <ul className="footer-links">
              <li><a href="#bebidas">Bebidas</a></li>
              <li><a href="#snacks">Snacks</a></li>
              <li><a href="#combos">Combos</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Empresa</h4>
            <ul className="footer-links">
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#contacto">Contacto</a></li>
              <li><a href="#sucursales">Sucursales</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Síguenos</h4>
            <div className="social-links">
              <a href="#facebook" className="social-link">Facebook</a>
              <a href="#instagram" className="social-link">Instagram</a>
              <a href="#twitter" className="social-link">Twitter</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Coca-Cola. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
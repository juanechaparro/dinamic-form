import logo from "../assets/logo.png";
import "../styles/Footer.css";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="footer-text">
        <p>2023 Habi® Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

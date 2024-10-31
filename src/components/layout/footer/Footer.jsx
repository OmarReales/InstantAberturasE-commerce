import logo from "../../../assets/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import appImg from "../../../assets/app.jpg";
import playImg from "../../../assets/play.jpg";
import payImg from "../../../assets/pay.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <div className="company-logo">
            <img className="logo" src={logo} alt="" />
            {/* <span className="company-name">Instant Aberturas</span> */}
          </div>
          <div className="contact-info">
            <h4>Contactos</h4>
            <p>
              <strong>Teléfono:</strong> 123-456-7890
            </p>
            <p>
              <strong>Horario:</strong> 9:00 - 18:00, Lunes a viernes
            </p>
          </div>
          <div className="social-media">
            <h4>Siguenos</h4>
            <div className="social-icons">
              <a href="#" className="social-icon facebook">
                <FacebookIcon />
              </a>
              <a href="#" className="social-icon twitter">
                <XIcon />
              </a>
              <a href="#" className="social-icon instagram">
                <InstagramIcon />
              </a>
              <a href="#" className="social-icon youtube">
                <YouTubeIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-col">
          <h4>Información</h4>
          <div className="footer-links">
            <a href="#">Sobre nosotros</a>
            <a href="#">Informacion de envios</a>
            <a href="#">Políticas de privacidad</a>
            <a href="#">Terminos y condiciones</a>
            <a href="#">Contactanos</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Tu cuenta</h4>
          <div className="footer-links">
            <a href="#">Iniciar sesión</a>
            <a href="#">Ver carro de compra</a>
            <a href="#">Wishlist</a>
            <a href="#">Seguir pedidos</a>
            <a href="#">Ayuda</a>
          </div>
        </div>

        <div className="footer-col app-install">
          <h4>Instalar App</h4>
          <p>Desde la Play Store o App Store</p>
          <div className="store-buttons">
            <a href="#" className="store-button">
              <img src={appImg} alt="App Store" />
            </a>
            <a href="#" className="store-button">
              <img src={playImg} alt="Play Store" />
            </a>
          </div>
          <div className="payment-methods">
            <p>Metodos de pago</p>
            <div className="payment-icons">
              <div className="payment-icon">
                <img src={payImg} alt="Payment methods" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>© 2024 Tienda - Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;

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
    <footer className="section-p1">
      <div className="col">
        <img className="logo" src={logo} alt="" />
        <h4>Contactos</h4>
        <p>
          <strong>Teléfono:</strong> 123-456-7890
        </p>
        <p>
          <strong>Horario:</strong> 9:00 - 18:00, Lunes a viernes
        </p>
        <div className="follow">
          <h4>Siguenos</h4>
          <div className="icon">
            <i>
              <FacebookIcon />
            </i>
            <i>
              <XIcon />
            </i>
            <i>
              <InstagramIcon />
            </i>
            <i>
              <YouTubeIcon />
            </i>
          </div>
        </div>
      </div>
      <div className="col">
        <h4>Información</h4>
        <a href="#">Sobre nosotros</a>
        <a href="#">Informacion de envios</a>
        <a href="#">Políticas de privacidad</a>
        <a href="#">Terminos y condiciones</a>
        <a href="#">Contactanos</a>
      </div>
      <div className="col">
        <h4>Tu cuenta</h4>
        <a href="#">Iniciar sesión</a>
        <a href="#">Ver carro de compra</a>
        <a href="#">Wishlist</a>
        <a href="#">Seguir pedidos</a>
        <a href="#">Ayuda</a>
      </div>
      <div className="col install">
        <h4>Instalar App</h4>
        <p>Desde la Play Store o App Store</p>
        <div className="row">
          <img src={appImg} alt="" />
          <img src={playImg} alt="" />
        </div>
        <p>Metodos de pago</p>
        <img src={payImg} alt="" />
      </div>
      <div className="copyright">
        <p>© 2024 Tienda - Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;

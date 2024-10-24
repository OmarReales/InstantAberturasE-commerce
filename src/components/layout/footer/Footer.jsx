import "./footer.css";

const Footer = () => {
  return (
    <footer className="section-p1">
      <div className="col">
        <img className="logo" src="img/logo.png" alt="" />
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
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest-p"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>
      <div className="col">
        <h4>Información</h4>
        <a href="pages/about.html">Sobre nosotros</a>
        <a href="#">Informacion de envios</a>
        <a href="#">Políticas de privacidad</a>
        <a href="#">Terminos y condiciones</a>
        <a href="pages/contact.html">Contactanos</a>
      </div>
      <div className="col">
        <h4>Tu cuenta</h4>
        <a href="#">Iniciar sesión</a>
        <a href="pages/cart.html">Ver carro de compra</a>
        <a href="#">Wishlist</a>
        <a href="#">Seguir pedidos</a>
        <a href="#">Ayuda</a>
      </div>
      <div className="col install">
        <h4>Instalar App</h4>
        <p>Desde la Play Store o App Store</p>
        <div className="row">
          <img src="img/pay/app.jpg" alt="" />
          <img src="img/pay/play.jpg" alt="" />
        </div>
        <p>Metodos de pago</p>
        <img src="img/pay/pay.png" alt="" />
      </div>
      <div className="copyright">
        <p>© 2024 Tienda - Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;

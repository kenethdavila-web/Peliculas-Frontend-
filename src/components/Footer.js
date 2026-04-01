function Footer() {
  return (
    <footer className="footer text-center">
      <div className="container">
        <h5 className="mb-3">🎬 MoviesApp</h5>

        {/* LINKS */}
        <div className="mb-3">
          <a href="/" className="footer-link">
            Inicio
          </a>
          <a href="/media" className="footer-link">
            Media
          </a>
          <a href="/generos" className="footer-link">
            Géneros
          </a>
          <a href="/directores" className="footer-link">
            Directores
          </a>
          <a href="/productoras" className="footer-link">
            Productoras
          </a>
          <a href="/tipos" className="footer-link">
            Tipos
          </a>
        </div>

        {/* REDES */}
        <div className="mb-3">
          <a href="#" className="social">
            🌐 Facebook {" "}
          </a>
          <a href="#" className="social">
            📱 WhatsApp {" "}
          </a>
          <a href="#" className="social">
            📸 Instagram {" "}
          </a>
        </div>

        <p>© 2026 MoviesApp</p>
        <p>Desarrollado por Ingeniería Web 2</p>
      </div>

      <style>
        {`
          .footer {
            background: #000;
            color: #aaa;
            padding: 30px 0;
            margin-top: 50px;
            border-top: 1px solid #222;
          }

          .footer-link {
            color: #aaa;
            margin: 0 10px;
            text-decoration: none;
            transition: 0.3s;
          }

          .footer-link:hover {
            color: #e50914;
          }

          .social {
            font-size: 20px;
            margin: 0 10px;
            color: #aaa;
            text-decoration: none;
            transition: 0.3s;
          }

          .social:hover {
            color: #e50914;
            transform: scale(1.2);
          }

          .footer:hover {
            color: white;
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;

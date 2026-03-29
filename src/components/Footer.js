function Footer() {
  return (
    <footer className="footer text-center">
      <p>🎬 MoviesApp © 2026</p>
      <p>Desarrollado por Keneth Davila</p>

      <style>
        {`
          .footer {
            background-color: #111;
            color: #aaa;
            padding: 20px;
            margin-top: 40px;
          }

          .footer p {
            margin: 5px 0;
          }

          .footer:hover {
            color: white;
            transition: 0.3s;
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;
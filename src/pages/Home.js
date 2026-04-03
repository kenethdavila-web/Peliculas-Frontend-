import fondo from "../assets/fondo.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        background: `
          linear-gradient(to top, rgba(43, 42, 42, 0.9), rgba(0,0,0,0.4)),
          url(${fondo})
        `,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
        height: "140vh",
        color: "white",
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <div
        style={{
          backgroundColor: "rgba(12, 6, 6, 0.6)239, 0.6)",
          padding: "60px",
          borderRadius: "65px",
          textAlign: "center",
          animation: "fadeIn 1.5s ease-in-out",
          backdropFilter: "blur(5px)", // 🔥 efecto vidrio
        }}
      >
        <h1 className="fw-bold mb-3">🎬 Movies App</h1>
        <p className="lead mb-4">
          Explora películas, directores y más
        </p>

        <div className="d-flex justify-content-center gap-3">
          <Link to="/media" className="btn btn-danger btn-lg px-4">
            ▶ Ver catálogo
          </Link>


        </div>
      </div>

      {/* 🔥 Animación */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .btn-danger {
            transition: all 0.3s ease;
          }

          .btn-danger:hover {
            transform: scale(1.05);
            box-shadow: 0 0 15px rgba(255, 0, 0, 0.7);
          }

          
        `}
      </style>
    </div>
  );
}

export default Home;
function Loader() {
  return (
    <div className="loader-container">
      <div className="spinner"></div>

      <style>
        {`
          .loader-container {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: black;
          }

          .spinner {
            width: 60px;
            height: 60px;
            border: 6px solid rgba(255,255,255,0.2);
            border-top: 6px solid #e50914;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}

export default Loader;

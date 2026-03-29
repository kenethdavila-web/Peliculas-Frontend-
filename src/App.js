import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Generos from "./pages/Generos";
import Directores from "./pages/Directores";
import Productoras from "./pages/Productoras";
import Tipos from "./pages/Tipos";
import Media from "./pages/Media";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      <Navbar />

      <div className="container mt-4">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/generos" component={Generos} />
          <Route path="/directores" component={Directores} />
          <Route path="/productoras" component={Productoras} />
          <Route path="/tipos" component={Tipos} />
          <Route path="/media" component={Media} />
        </Switch>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
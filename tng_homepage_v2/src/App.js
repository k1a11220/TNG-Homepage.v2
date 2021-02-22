import React from 'react';
import { HashRouter, Route } from "react-router-dom"

import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import Home from "./routes/Home"
import About from "./routes/About"
import Product from "./routes/Product"

function App() {
  return (
<HashRouter>
  <Navigation />
  <Route path="/" exact={true} component={Home} />
  <Route path="/Home" component={Home} />
  <Route path="/About" component={About} />
  <Route path="/Product" component={Product} />
  <Footer />
</HashRouter>
  );
}

export default App;

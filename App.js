import React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Serviços from './components/Serviços';
import Quemsomos from './components/Quemsomos';
import Blog from './components/Blog';
import Footer from './components/Footer';
import PaginaInicial from './components/PaginaInicial';

import './App.css';
import Navbar from './components/NavBar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <header>
        <Link to="/">Pagina Inicial</Link>
        <Link to="/servico"> Serviços</Link>
        <Link to="/blog"> Blog</Link>
        <Link to="/quemsomos"> Quem somos</Link>
      </header>
      <section>
        <Router>
          <Route exact path="/" component={PaginaInicial} />
          <Route path={'/servico'} component={Serviços} />
          <Route path={'/blog'} component={Blog} />
          <Route path={'/quemsomos'} component={Quemsomos} />
        </Router>
      </section>
      <Serviços />
      <PaginaInicial />
      <Quemsomos/>
      <Blog/>
      <Footer msg="Muito Obrigada" />
     

    </div>
  );

}




export default App;

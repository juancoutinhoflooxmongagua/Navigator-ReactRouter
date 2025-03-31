import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Menu from '../components/layout/Menu';
import Content from '../components/layout/Content';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <BrowserRouter>
    <div className="d-flex flex-column vh-100">
      {/* Navbar */}
      <header className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Meu App</a>
        </div>
      </header>

      <div className="d-flex flex-grow-1">
        <nav className="col-md-3 col-lg-2 p-3 bg-dark text-white">
          <Menu />
        </nav>

        <main className="col-md-9 col-lg-10 p-4 bg-light">
          <Content />
        </main>
      </div>

     <footer className="bg-dark text-white text-center py-3 mt-auto">
        <p className="mb-0">© 2025 Meu App. Todos os direitos reservados.</p>
      </footer>
    </div>
  </BrowserRouter>
);

export default App;

import React from 'react';
import './App.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#sobre-nosotros">Sobre nosotros</a></li>
        <li><a href="#nuestro-menu">Nuestro Menú</a></li>
        <li><a href="#reservaciones">Reservaciones</a></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <section id="sobre-nosotros">
          <h2><header className="App-header">
            <h1>Bienvenido a El rincón de Poma</h1>
            <p>Descubre la magia de la panadería en nuestra cocina</p>
            <img src="ruta/a/tu/imagen.jpg" alt="Pan recién horneado" />
            </header>
          </h2>
          {/* Contenido sobre la panadería */}
        </section>
        <section id="nuestro-menu">
          <h2>Nuestro Menú</h2>
          {/* Contenido del menú */}
        </section>
        <section id="reservaciones">
          <h2>Reservaciones</h2>
          {/* Formulario de reservaciones u otra información relacionada */}
        </section>
      </header>
    </div>
  );
}

export default App;

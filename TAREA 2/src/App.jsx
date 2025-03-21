import React, { useState } from 'react';
import './App.css';

function App() {
  const [mensaje, setMensaje] = useState('');
  
  const mostrarMensaje = () => {
    setMensaje('¡Hola Mundo!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi Aplicación React</h1>
        <button onClick={mostrarMensaje}>
          Presióname
        </button>
        <p className="mensaje">{mensaje}</p>
      </header>
    </div>
  );
}

export default App;
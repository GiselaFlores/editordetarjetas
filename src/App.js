import './App.css';
import React, { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {
  {/* Contenido que no se va a exportar del componente en jsx */}

  const [mensaje, setMensaje]= useState();
  const [firma, setFirma]= useState();
  const [imagen, setImagen] = useState();

  const mensajeDedicado = function (e) {
    setMensaje(e.target.value);
  }

  const firmaFinal = function (e) {
    setFirma(e.target.value);
  }

  const fondo = function (e) {
    setImagen(e.target.value);
  }

  const archivoExportado = function (e){
    html2canvas(document.querySelector("#exportar")).then(canvas => {
    {/*document.body.appendChild(canvas); se puede usar para el historial de tarjetas*/}
    let img = canvas.toDataURL("img/png");
    let link = document.createElement('a');
    link.download = 'tarjeta.png';
    link.href = img;
    link.click();

  });
  }

  return (
    <div className="App">

      <h1 className="mt-4 mb-3">Arma tu propia tarjeta</h1>

      <select onChange={fondo} className="form-select form-select-lg mb-3 w-25 m-auto" aria-label=".form-select-lg example">
        <option>Elige un fondo de tarjeta</option>
        <option value={1} defaultValue>fondo tarjeta de flores</option>
        <option value={2}>fondo romantico circulos</option>
        <option value={3}>fondo de paisaje lago</option>
        <option value={4}>fondo de animales infantil</option>
        <option value={5}>fondo de pareja romantico</option>
      </select>

      {/* otra alternativa
      <div class="dropdown mt-4">
        <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Selecciona tu imagen
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li value="1"><a class="dropdown-item" href="#">fondo tarjeta de flores </a></li>
          <li value="2"><a class="dropdown-item" href="#">fondo romantico circulos</a></li>
          <li value="3"><a class="dropdown-item" href="#">fondo de paisaje lago</a></li>
          <li value="4"><a class="dropdown-item" href="#">fondo de animales infantil</a></li>
          <li value="5"><a class="dropdown-item" href="#">fondo de pareja romantico</a></li>
        </ul>
      </div> 
      */}

      <h3 className="mt-3 mb-3">Ingresa tu mensaje para la tarjeta</h3>
      <input onChange={mensajeDedicado} className="form-control w-25 m-auto d-block" type="text" placeholder="tu mensaje..." aria-label="default input example"></input>
      {/* 
      <h3 className="mt-3 mb-3">Ingresa tu nombre para la tarjeta</h3>
      <input  onChange={firmaFinal} className="form-control w-25 m-auto d-block" type="text" placeholder="tu nombre..." aria-label="default input example"></input>
      */}
      <button onClick={archivoExportado} type="button" className="btn btn-primary m-auto mt-4 mb-4">Exportar tarjeta</button>

    
      <figure className="figure w-50 m-auto d-block position-relative centrado text-center figure2" id="exportar">
        <p className=" w-100 px-30 text-center position-absolute top-50 start-30 h1 text-center">{mensaje}</p>
        <img src={`/img/${imagen}.png`} className="figure-img img-fluid mt-3 m-0 p-0 " alt="..." />
       {/* <p className=" w-100 border border-secondary text-white bg-dark pt-1 mt-0 pb-2 h5 text-center position-absolute end-80 start-30">{firma}</p>*/}
      </figure> 

    </div>
  );
}

export default App;

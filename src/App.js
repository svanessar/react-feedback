//dependencias necesarias
import React, { useState } from 'react';
//data
import Resenias from './data/Resenias';
//componentes
//import Header from "./componentes/Header.jsx";
import Resenia from './componentes/Resenia';
import  ReseniaList from './componentes/ReseniaList';

function App() {
  //crear estado para arreglo de resenias
  const [lista_resenias, setListaResenias] = useState(Resenias);

  console.log(lista_resenias);
  return (
    <div className="container">
      <ReseniaList listaresenias={lista_resenias} />
    </div>
  );
}

export default App;

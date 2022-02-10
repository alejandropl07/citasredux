import React from "react";

//Redux
import store from "./store";
import {Provider} from  'react-redux';

function App() {
  
  return (
    <Provider store={store}>
    <div className="container">
      <header>
        <h1 className="text-center">Administrador de Pacientes de Veterinaria</h1>
      </header>

      <div  className="row mt-3"> 
      <div  className="col-md-6">
      Formulario aquí
    </div>
    
  <div  className="col-md-6">
    Listado aquí
  </div>
    </div>

    </div>
    
    </Provider> 
  );
}

export default App;

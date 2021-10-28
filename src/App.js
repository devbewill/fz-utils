import React, { useState } from "react";
// import './App.css';
import "./style.scss";
import { Home } from "./Home";
import { ParserQuadri } from "./ParserQuadri";
import { FormGenerator } from "./FormGenerator";
import { TrovaDipendenze } from "./TrovaDipendenze";
// import {FetchQuadro} from './FetchQuadro';
// import { ReduceExample } from './ReduceExample';

function App() {
  const [component, setComponent] = useState("");

  return (
    <div className="App">
      <div className="selector">
        <button onClick={() => setComponent(0)}>Home</button>
        <button onClick={() => setComponent(1)}>Manuale Tecnico</button>
        <button onClick={() => setComponent(2)}>Quadro Autogenerato</button>
        <button onClick={() => setComponent(3)}>Dipendenze Campi</button>
      </div>

      {(() => {
        switch (component) {
          case 0:
            return <Home></Home>;
          case 1:
            return <ParserQuadri></ParserQuadri>;
          case 2:
            return <FormGenerator></FormGenerator>;
          case 3:
            return <TrovaDipendenze></TrovaDipendenze>;
          default:
            return <Home></Home>;
        }
      })()}
    </div>
  );
}

export default App;

import React, { useState } from "react";
// import './App.css';
import "./style.scss";
import { Home } from "./components/Home";
import { ParserQuadri } from "./components/ParserQuadri";
import { FormGenerator } from "./components/FormGenerator";
import { TrovaDipendenze } from "./components/TrovaDipendenze";
import { TrattamentiMida } from "./components/TrattamentiMida";
import { TrelloDashboard } from "./components/TrelloDashboard";
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
        <button onClick={() => setComponent(4)}>Trattamenti MIDA</button>
        <button onClick={() => setComponent(5)}>Trello</button>
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
            case 4:
              return <TrattamentiMida></TrattamentiMida>;
              case 5:
                return <TrelloDashboard></TrelloDashboard>;
          default:
            return <Home></Home>;
        }
      })()}
    </div>
  );
}

export default App;

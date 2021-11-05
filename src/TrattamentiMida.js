import React, { useState, useEffect } from "react";
import data from "./trattamentiMida.json";
import dataDesc from "./trattamentiMidaDescription.json";

export const TrattamentiMida = () => {
  const [loading, setLoading] = useState(true);
  const [fiscalElements, setfiscalelements] = useState(data.fiscal_elements);
  const [fiscalElementsData, setfiscalelementsData] = useState(dataDesc)
  let label;

  useEffect(() => {}, []);

  const merged = [...[fiscalElements, fiscalElementsData].reduce((m, a) => (a.forEach(o => m.has(o.code) && Object.assign(m.get(o.code), o) || m.set(o.code, o)), m), new Map).values()];

  return (
    <>
      <div className="trattamentiMida">
        <table>
          <thead>
            <tr>
              <th>Campo</th>
              <th>Valore</th>
              <th>Descrizione</th>
            </tr>
          </thead>
          <tbody>
            {merged.map((item, i) => {
              const { code, value, description } = item;
              console.log(code.slice(0, 2));
              switch (code.slice(0, 2)) {
                case "FA":
                  label = "Familiari";
                  break;
                case "DC":
                  label = "Dati cliente";
                  break;
                case "CA":
                  label = "Crediti Acconti";
                  break;
                case "RC":
                  label = "Lavoro Dipendente";
                  break;
                case "RG":
                  label = "Semplificati";
                  break;
                case "SC":
                  label = "Scelte Utente";
                  break;
                case "LM":
                  label = "Forfettario";
                  break;
                default:
                  label = "";
              }

              return (
                <tr key={i}>
                  <td>{code}</td>
                  <td>{value}</td>
                  <td>{description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};




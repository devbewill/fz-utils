import React, { useState, useEffect } from "react";
import data from "../json/trattamentiMida.json";
import dataDesc from "../json/trattamentiMidaDescription.json";

export const TrattamentiMida = () => {
  // const [loading, setLoading] = useState(true);
  let fiscalElements = data.fiscal_elements
  let fiscalElementsData = dataDesc
  // const [fiscalElements, setfiscalelements] = useState(data.fiscal_elements);
  // const [fiscalElementsData, setfiscalelementsData] = useState(dataDesc)

  useEffect(() => {}, []);

  const merged = [...[fiscalElements, fiscalElementsData].reduce((obj, acc) => (acc.forEach(o => obj.has(o.code) && Object.assign(obj.get(o.code), o) || obj.set(o.code, o)), obj), new Map).values()]

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




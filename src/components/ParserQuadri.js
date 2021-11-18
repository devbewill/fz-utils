import React, { useState, useEffect } from "react";
import data from "../json/data";

export const ParserQuadri = () => {
  const [quadriSplit, setQuadriSplit] = useState([]);
  let totArr = [];


  useEffect(() => {
    let newArr = [
      data.filter((quadro) => quadro.field.slice(0, 2) === "RA"),
      data.filter((quadro) => quadro.field.slice(0, 2) === "RB"),
      data.filter((quadro) => quadro.field.slice(0, 2) === "FA"),
      data.filter((quadro) => quadro.field.slice(0, 2) === "RC"),
      data.filter((quadro) => quadro.field.slice(0, 2) === "CR"),
      data.filter((quadro) => quadro.field.slice(0, 2) === "RP"),
      data.filter((quadro) => quadro.field.slice(0, 2) === "LC"),
      data.filter((quadro) => quadro.field.slice(0, 2) === "RN"),
      data.filter((quadro) => quadro.field.slice(0, 2) === "RV"),
      data.filter((quadro) => quadro.field.slice(0, 2) === "DI"),
      data.filter((quadro) => quadro.field.slice(0, 2) === "RX"),
      data.filter((quadro) => quadro.field.slice(0, 2) === "RH"),
      data.filter((quadro) => quadro.field.slice(0, 2) === "RL"),
      data.filter((quadro) => quadro.field.slice(0, 2) === "RM"),
      data.filter((quadro) => quadro.field.slice(0, 2) === "RT"),
      data.filter((quadro) => quadro.field.slice(0, 2) === "RW"),
      data.filter((quadro) => quadro.field.slice(0, 2) === "AC"),
      data.filter((quadro) => quadro.field.slice(0, 2) === "RE"),
      data.filter((quadro) => quadro.field.slice(0, 2) === "RF"),
      data.filter((quadro) => quadro.field.slice(0, 2) === "RG"),
      data.filter((quadro) => quadro.field.slice(0, 2) === "LM"),
      data.filter((quadro) => quadro.field.slice(0, 2) === "RD"),
      data.filter((quadro) => quadro.field.slice(0, 2) === "RR"),
      data.filter((quadro) => quadro.field.slice(0, 2) === "RS"),
      data.filter((quadro) => quadro.field.slice(0, 2) === "RQ"),
      data.filter((quadro) => quadro.field.slice(0, 2) === "FC"),
      data.filter((quadro) => quadro.field.slice(0, 2) === "NR"),
      data.filter((quadro) => quadro.field.slice(0, 2) === "CE"),
      data.filter((quadro) => quadro.field.slice(0, 2) === "TR"),
      data.filter((quadro) => quadro.field.slice(0, 2) === "RU"),
      data.filter((quadro) => quadro.field.slice(0, 2) === "VO"),
    ];
    setQuadriSplit(newArr);
  }, [setQuadriSplit]);

  return (
    <>
      {quadriSplit.map((item, i) => {
        totArr = [
          ...totArr,
          [item[0].field.slice(0, 2), Object.values(item).length],
        ];
        return (
          <div key={i} className="parserQuadri">
            <h3>
              Quadro {item[0].field.slice(0, 2)}
              <span>{Object.values(item).length}</span>
            </h3>

            <table>
              <thead>
                <tr>
                  <th>Campo</th>
                  <th>Type</th>
                  <th>Desc</th>
                  <th>Value</th>
                  <th>Easy Check</th>
                  <th>Strong Check</th>
                </tr>
              </thead>
              <tbody>
                {item.map((single, i) => {
                  return (
                    <tr key={i}>
                      <td>{single.field}</td>
                      <td>{single.type}</td>
                      <td>{single.description}</td>
                      <td>{single.possible_value}</td>
                      <td>{single.easy_check}</td>
                      <td>{single.strong_check}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      })}

      <div className="tot">
        {totArr
          .sort((a, b) => a[1] - b[1])
          .map((item, i) => {
            return (
              <p key={i}>
                {item[0]} : {item[1]}
              </p>
            );
          })}
      </div>
    </>
  );
};

import React, { useState, useEffect } from "react";
import data from "./data";

export const TrovaDipendenze = () => {
  useEffect(() => {}, []);
  let easy = data.filter((quadro) => quadro.easy_check);
  let hard = data.filter((quadro) => quadro.strong_check);
  let newArr = [...easy, ...hard];

  var a = 0;
  var b = 0;
  var c = 0;

  return (
    <div className="trovaDipendenze">
      <table>
        <thead>
          <tr>
            <th>Campo</th>
            <th>Desc</th>
            <th>Value</th>
            <th>Easy check</th>
            <th>Strong check</th>
            <th>Double check</th>
          </tr>
        </thead>
        <tbody>
          {newArr.map((item, i) => {
            var easymatch = item.easy_check.match(/[a-zA-Z]+(\d+)/);
            var strongmatch = item.strong_check.match(/[a-zA-Z]+(\d+)/);

            if (Array.isArray(easymatch) && Array.isArray(strongmatch)) {
              a++;
              var easyChanged = newArr.filter((quadro) => quadro.field === easymatch[0] );
              var strongChanged = newArr.filter((quadro) => quadro.field === strongmatch[0] );
              return (
                <Doublecheck
                  count={a}
                  key={i}
                  item={item}
                  easy={easymatch}
                  strong={strongmatch}
                  easyChanged = {easyChanged}
                  strongChanged = {strongChanged}
                ></Doublecheck>
              )
            } else if (Array.isArray(easymatch)) {
              b++;
              var easyChanged = newArr.filter((quadro) => quadro.field === easymatch[0] );
              return (
                <Easycheck
                  count={b}
                  key={i}
                  item={item}
                  easy={easymatch}
                  easyChanged = {easyChanged}
                ></Easycheck>
              );
            } else if (Array.isArray(strongmatch)) {
              c++;

              var strongChanged = newArr.filter((quadro) => quadro.field === strongmatch[0] );
              return (
                <Strongcheck
                  count={c}
                  key={i}
                  item={item}
                  strong={strongmatch}
                  strongChanged = {strongChanged}
                ></Strongcheck>
              );
            }
          })}
        </tbody>
      </table>
      <div className="tot">
        <p>Total: {a + b + c}<br/><br/></p>
        <p>Easy: {b}</p>
        <p>Double: {a}</p>
        <p>Strong: {c}</p>
      </div>
    </div>
  );
};

const Doublecheck = ({ item, easy, strong, easyChanged, strongChanged }) => {
  return (
    <tr className="double">
      <td>{item.field}</td>
      <td>{item.description}</td>
      <td>{item.possible_value}</td>
      <td>{item.easy_check} 
      <span className="dipendenza">{easyChanged[0] && easyChanged[0].description
      }</span></td>
      <td>{item.strong_check}<span className="dipendenza">{strongChanged[0] && strongChanged[0].description
      }</span></td>
            <td>
        {easy[0]},{strong[0]}
      </td>

    </tr>
  );
};

const Easycheck = ({ item, easy, easyChanged }) => {
  return (
    <tr className="easy">
      <td>{item.field}</td>
      <td>{item.description}</td>
      <td>{item.possible_value}</td>
      <td>{item.easy_check}  <span className="dipendenza">{easyChanged[0] && easyChanged[0].description
      }</span></td>
      <td>{item.strong_check}</td>
      <td>{easy[0]}</td>
    </tr>
  );
};

const Strongcheck = ({ item, strong, strongChanged }) => {
  return (
    <tr className="strong">
      <td>{item.field}</td>
      <td>{item.description}</td>
      <td>{item.possible_value}</td>
      <td>{item.easy_check}</td>
      <td>{item.strong_check}<span className="dipendenza">{strongChanged[0] && strongChanged[0].description
      }</span></td>
      <td>{strong[0]}</td>
    </tr>
  );
};

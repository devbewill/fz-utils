import React, { useState } from "react";
// import data from "./campiGrid.json";
import data from "./quadroLMfz.json";

export const FormGenerator = () => {
  const refactorObj = Object.values(
    data.reduce((b, a) => {
      if (b.hasOwnProperty(a.section)) {
        b[a.section].columns.push({ col: a.column, desc: a.description });
      } else {
        a.columns = [{ col: a.column, desc: a.description }];
        b[a.section] = a;
      }
      return b;
    }, {})
  ).sort((a, b) => (a.section > b.section ? 1 : -1));

  return (
    <div className="formGenerator">
      <div className="container">
        <h2>QUADRO LM</h2>
        <RowGenerator refactorObj={refactorObj}></RowGenerator>
      </div>
    </div>
  );
};

export const RowGenerator = ({ refactorObj }) => {
  return refactorObj.map((obj, i) => {
    let colGrid = 12 / obj.columns.length;
    colGrid > 5 && (colGrid = 3);
    return <ColsGenerator key={i} {...{ obj, i, colGrid }} />;
  });
};

export const ColsGenerator = (props) => {
  const { obj, i, colGrid } = props;
  return (
    <div key={i} className="riga">
      <p> {obj.section}</p>
      <div className="row">
        {obj.columns.map((col, i) => (
          <div key={i} className={`col col-lg-${colGrid}`}>
            <span className="desc">{col.desc}</span>
            <div className="inner">
              <span className="campo">{col.col}</span>
              <p className="amount">
                {/* {(Math.random() * (10000.0 - 1.0 + 1.0) + 1.0).toFixed(2)} */}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


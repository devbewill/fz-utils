import React, { useState, useEffect } from "react";
import data from "../json/data";

export const Parser = () => {
  const [countStrong, setCountStrong] = useState(0);
  const [countEasy, setCountEasy] = useState(0);
  const [countFields, setCountFields] = useState(0);
  const [countPN, setCountPN] = useState(0);
  const [countCF, setCountCF] = useState(0);
  const [countCB, setCountCB] = useState(0);
  const [countDT, setCountDT] = useState(0);
  const [countAN, setCountAN] = useState(0);
  const [countNP, setCountNP] = useState(0);
  const [countNU, setCountNU] = useState(0);
  let strongCounter = 0;
  let easyCounter = 0;
  let totalFields = 0;
  let lmFields = 0;
  let cb = 0;
  let dt = 0;
  let cf = 0;
  let an = 0;
  let np = 0;
  let nu = 0;
  let pn = 0;

  useEffect(() => {
    setCountStrong(strongCounter);
    setCountEasy(easyCounter);
    setCountFields(totalFields);
    setCountCF(cf);
    setCountCB(cb);
    setCountDT(dt);
    setCountAN(an);
    setCountNP(np);
    setCountPN(pn);
    setCountNU(nu);
  }, []);

  return (
    <>
      <div className="counter">
        <p>Total fields: {countFields}</p>
        <p>Easy Check: {countEasy}</p>
        <p>Strong Check: {countStrong}</p>
        <p>CF: {countCF}</p>
        <p>CB: {countCB}</p>
        <p>NA: {countDT}</p>
        <p>AN: {countAN}</p>
        <p>NP: {countNP}</p>
        <p>PN: {countPN}</p>
        <p>NU: {countNU}</p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Description</th>
            <th>Type</th>
            <th>Possibile value</th>
            <th>Mono</th>
            <th>easy_check</th>
            <th>strong_check</th>
          </tr>
        </thead>
        <tbody>
          {data.map((field, i) => {
            if (field.strong_check) strongCounter++;
            if (field.easy_check) easyCounter++;
            // switch (field.type) {
            //   case "DT":
            //     dt++;
            //     break;
            //   case "CB":
            //     cb++;
            //     break;
            //   case "CF":
            //     cf++;
            //     break;
            //   case "AN":
            //     an++;
            //     break;
            //   case "NP":
            //     np++;
            //     break;
            //   case "NU":
            //     nu++;
            //     break;
            //   case "PN":
            //     pn++;
            //     break;
            //   default:
            //     break;
            // }
            // if (typeof(field.field) != "string") console.log(field.description)
            if(field.field.startsWith('FA')) lmFields++;
            totalFields++;

            return (
              <tr key={i}>
                <td>{field.field}</td>
                <td>{field.description}</td>
                <td>{field.type}</td>
                <td>{field.possible_value}</td>
                <td>{field.mono}</td>
                <td>{field.easy_check}</td>
                <td>{field.strong_check}</td>
              </tr>
            );
          })}
          {console.log(lmFields)}
        </tbody>
      </table>
    </>
  );
};

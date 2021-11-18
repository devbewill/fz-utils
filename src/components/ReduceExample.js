import React, { useState } from "react";
import data from "../json/campiGrid.json";

export const ReduceExample = () => {
  // const refactorObj = data.reduce(function (acc, item) {
  //   return{
  //     ...acc, [item.section] : item
  //   }
  //   }, {})

  const refactorObj = Object.values(
    data.reduce(function (acc, item) {
      if (acc.hasOwnProperty(item.section)) {
        acc[item.section].columns.push({
          col: item.column,
          desc: item.description,
        });
      } else {
        item.columns = [{ col: item.column, desc: item.description }];
        acc[item.section] = item;
      }
      return acc;
    }, {})
  );

  console.log(refactorObj);

  return (
    <div>
      <div className="container">
        <h2>QUADRO LM</h2>
        {refactorObj.map((item, i) => (
          <div>
            <h3>{item.section}</h3>
            {item.columns.map((col, i) => (
              <p>
                {col.col} - {col.desc}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// {output.map(obj => (
//   <div>
//     {obj.section}
//     <ul>
//       {obj.columns.map(col => (
//         <li> {col} </li>
//       ))}
//     </ul>
//   </div>
// ))}

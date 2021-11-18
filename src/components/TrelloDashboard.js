import React, { useState, useEffect } from "react";
import axios from "axios";

export const TrelloDashboard = () => {

  const baseURL = `https://api.trello.com/1/boards/${process.env.REACT_APP_TRELLO_BOARD}/cards?key=${process.env.REACT_APP_TRELLO_KEY}&token=${process.env.REACT_APP_TRELLO_TOKEN}`

  let listName;
 
  const [lists, setLists] = useState([]);
  const [cards, setCards] = useState([]);
  const groupByKey = (array, key) => {
    return array.reduce((hash, obj) => {
      if (obj[key] === undefined) return hash;
      return Object.assign(hash, {
        [obj[key]]: (hash[obj[key]] || []).concat(obj),
      });
    }, {});
  };
  let splitByCard = groupByKey(cards, "idList");

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCards(response.data)
      });
  }, []);


  return (
    <div className="trelloDash">
      {Object.entries(splitByCard).map((list, i) => {
        if (list[0] === "606f1a2bebb5fb53804dd3d5") {
          listName = "TO DO";
        } else if (list[0] === "606f1a4ed2ff554e4ea11b82") {
          listName = "IN PROGRESS";
        } else {
          listName = "DONE";
        }
        return (
          <div key={i} className="list">
            <h1>
              {listName} <span>{list[1].length}</span>
            </h1>
            {Object.entries(list[1]).map((card, i) => {
              const { name, desc } = card[1];
              return (
                <div key={i} className="task" >
                  <h3>{name}</h3>
                  <p>{desc}</p>
                  <p></p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

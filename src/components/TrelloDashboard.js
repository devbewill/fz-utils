import React, { useState, useEffect } from "react";

export const TrelloDashboard = () => {
  // const TRELLO_TOKEN =
  //   "262f10ddc7962d28d4b472bc17c46e39c069a401a54abc269014c209f378f83e";
  const TRELLO_KEY = "42cd6a54f624ac7948e46f5198e4a94b";
  const Trello = require("trello-web");
  const trello = new Trello(TRELLO_KEY);
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

  useEffect(() => {
    Promise.resolve()
      .then(() => localStorage.getItem("token"))
      .then((existingToken) => {
        if (existingToken) {
          trello.token = existingToken;
        } else {
          return trello.auth({
            name: "My Trello App",
            scope: {
              read: true,
              write: false,
              account: true,
            },
            expiration: "1hour",
          });
        }
      })
      .then(() =>
        // trello.get("/1/tokens/" + trello.token + "/member", {
        //   fields: 'username,id,email'
        // })
        // trello.get('/1/members/me/boards').then(console.log)
        trello.get("/1/boards/0retKS6l/lists").then((data) => {
          setLists(data);
        })
      )
      .then(() =>
        trello.get("/1/boards/0retKS6l/cards").then((data) => {
          setCards(data);
        })
      )
      .catch((e) => {
        console.log(
          "something bad happened, or the user took too long to authorize.",
          e
        );
      });
  }, [ setCards, setLists]);

  let splitByCard = groupByKey(cards, "idList");
  let listName;

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

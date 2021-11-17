import React, { useState, useEffect } from "react";

export const TrelloDashboard = () => {
  const Trello = require("trello-web");
  const trello = new Trello("42cd6a54f624ac7948e46f5198e4a94b");
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
  }, [setCards, setLists]);

  let splitByCard = groupByKey(cards, "idList");

  console.log(lists);
  console.log(cards);

  return (
    <div>
      {Object.entries(splitByCard).map((list, i) => {
        return (
          <div>
            <h1>{list[0]}</h1>
            {Object.entries(list[1]).map((card, i) => {
              return (
                <div>
                  <span>{card[1].name}</span>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

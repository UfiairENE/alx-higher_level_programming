#!/usr/bin/node

const axios = require('axios').default;
const url = process.argv[2];
const dict = {};

axios.get(url)
  .then(function (response) {
    const bodyResponse = response.data;
    for (const todos of bodyResponse) {
      const id = todos.userId;
      if (!(id in dict)) {
        dict[id] = undefined;
      }
      if (todos.completed === true) {
        dict[id] = dict[id] + 1 || 1;
      }
    }
    for (const user in dict) {
      if (dict[user] === undefined) {
        delete dict[user];
      }
    }
    console.log(dict);
  });

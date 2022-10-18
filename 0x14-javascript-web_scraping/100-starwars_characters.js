#!/usr/bin/node

const axios = require('axios').default;
const url = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];

axios.get(url)
  .then(function (response) {
    response.data.characters.forEach(getName);
  });

function getName (item, index, arr) {
  axios.get(item)
    .then(function (resp) {
      console.log(resp.data.name);
    });
}

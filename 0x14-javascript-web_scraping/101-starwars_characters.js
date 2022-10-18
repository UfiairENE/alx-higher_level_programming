#!/usr/bin/node

const axios = require('axios').default;
const url = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];

axios.get(url)
  .then(function (response) {
    getName(response.data.characters);
  })
  .catch(err => {
    console.error(err);
  });

async function getName (charList) {
  try {
    for (const url of charList) {
      const resp = await axios.get(url);
      console.log(resp.data.name);
    }
  } catch (err) {
    console.error(err);
  }
}

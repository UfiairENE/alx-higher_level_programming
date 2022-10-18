#!/usr/bin/node

const axios = require('axios').default;
axios.get(process.argv[2])
  .then(function (response) {
    const movies = response.data.results;
    let count = 0;
    movies.forEach(dict => {
      for (const chars of dict.characters) {
        if (chars.includes('people/18/')) {
          count += 1;
        }
      }
    });
    console.log(count);
  });

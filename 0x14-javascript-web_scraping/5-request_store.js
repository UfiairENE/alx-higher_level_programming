#!/usr/bin/node

const fs = require('fs');
const axios = require('axios').default;
const url = process.argv[2];
const filename = process.argv[3];

axios.get(url)
  .then(function (response) {
    const bodyResponse = response.data;
    fs.writeFile(filename, bodyResponse, err => {
      if (err) {
        console.error(err);
      }
    });
  });

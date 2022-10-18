#!/usr/bin/node

const fs = require('fs');
const string = process.argv[3];

fs.writeFile(process.argv[2], string, err => {
  if (err) {
    console.error(err);
  }
});

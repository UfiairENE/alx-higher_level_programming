#!/usr/bin/node

const fs = require('fs');

try {
  const contents = fs.readFileSync(process.argv[2], 'utf-8');
  console.log(contents);
} catch (error) {
  console.error(error);
}

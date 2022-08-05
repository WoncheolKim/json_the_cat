const request = require('request');
const fs = require('fs');

let args = process.argv.slice(2);
let catName = args[0];

let URL = 'https://api.thecatapi.com/v1/breeds/search?q=' + catName;
request(URL, (error, response, body) => {
  if (error !== null) {
    console.log('error: ', error);
    process.exit();
  }

  if (body === "[]") {
    console.log("try again");
    process.exit();
  }

  const data = JSON.parse(body);
  //console.log(data);
  //console.log(typeof data);

  let catDescription = data[0].description;
  console.log(catDescription);

});

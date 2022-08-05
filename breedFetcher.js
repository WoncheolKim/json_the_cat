const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let URL = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

  request(URL, (error, response, body) => {
    console.log('statusCode:', response && response.statusCode);

    if (error !== null) {
      callback(error, null);
      process.exit();
    }

    if (body === "[]") {
      error = "We couldn't find a breed that matches your search. Please check your spelling and try again.";
      callback(error, null);
      process.exit();
    }

     const data = JSON.parse(body);
    let catDescription = data[0].description;
    callback(null, catDescription);
  });
};

module.exports = { fetchBreedDescription };



let fetch = require("node-fetch");
let promiseOne = fetch(
  "https://api.github.com/users/" + process.argv[2],
  { method: "GET",
    headers: {
    authorization: "token " + process.argv[3],
    }
  });

promiseOne.then(function handler(response) {
  console.log(response.status);
  if (response.status > 199 && response.status < 300) {
    response.json().then(function printData(data) {
    console.log(data.name, data.location);
    });
  }
    else {
      console.log("Insert Problem Here", response.status);
    }
});

// *******

let promiseTwo = fetch(
  "https://api.github.com/users/" +process.argv[2]+ "/repos",
  { method: "GET",
    headers: {
    authorization: "token " + process.argv[3],
    }
  });

let stars = 0;
let maxStars = 0;

promiseTwo.then(function handler(response) {
  console.log(response.status);
  if (response.status > 199 && response.status < 300) {
    response.json().then(function printData(data) {
      console.log(data.length);
        data.forEach(function countStars(each) {
        let starCount = new Number(each.stargazers_count);
        stars = stars + starCount;
        if (starCount >= maxStars)  {
          maxStars = starCount;

        }
        // console.log(each.name, starCount);
        // console.log(maxStars);
        // console.log(starCount);
        // console.log("Total stars: " + stars);
        //

        });

      });

  } else {
    console.log("Insert Problem Here", response.status);
  }


});

// ************

//
let promiseThree = fetch(
  "https://api.github.com/users/" +process.argv[2]+ "/repos",
  { method: "GET",
    headers: {
    authorization: "token " + process.argv[3],
    }
  });
  promiseThree.then(function handler(response) {
    console.log(response.status);
    if (response.status > 199 && response.status < 300) {
      response.json().then(function printData(data) {
      console.log(data[0].contributors_url);
      });
    }
      else {
        console.log("Insert Problem Here", response.status);
      }
  });

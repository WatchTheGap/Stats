let fetch = require("node-fetch");
let promise = fetch(
  // "https://api.github.com/users/" + process.argv[2],
  "https://api.github.com/users/" +process.argv[2]+ "/repos",

  { method: "GET",
    headers: {
    authorization: "token " + process.argv[3],
    }
  });

let stars = 0;
let maxStars = 0;

promise.then(function handler(response) {
  console.log(response.status);
  if (response.status > 199 && response.status < 300) {
    response.json().then(function printData(data) {
      // console.log(data.name, data.location); //<---keep for question 1
      // console.log(data[0]);
      console.log(data.length);

      data.forEach(function countStars(each) {
        let starCount = new Number(each.stargazers_count);
        stars = stars + starCount;
        if (starCount >= maxStars)  {
          maxStars = starCount;
        }
        console.log(maxStars);
        console.log(data.indexOf(maxStars));

        console.log(starCount);
        console.log(stars);
        });
      });

  } else {
    console.log("Insert Problem Here", response.status);
  }
});

let fetch = require("node-fetch");
let promise = fetch(
  "https://api.github.com/users/jakerella",
  // "https://api.github.com/users/jakerella/repos",

  {
    method: "GET",
    headers: {
      Authorization: "token " + process.argv[2]
  }
});

promise.then(function handler(response) {
  console.log(response.status);
  if (response.status > 199 && response.status <300) {
    response.json().then(function printData(data) {
      console.log(data.name, data.location);
      // console.log(data.stargazers_count);
    });
  } else {
    console.log("Insert Problem Here", response.status);
  }
});

let fetch = require("node-fetch");
let promise = fetch(
  // "https://api.github.com/users/" + process.argv[2],
  "https://api.github.com/users/" +process.argv[2]+ "/repos",

  { method: "GET",
    headers: {
    Authorization: "token " + process.argv[3]
    }
  });

promise.then(function handler(response) {
  console.log(response.status);
  if (response.status > 199 && response.status < 300) {
    response.json().then(function printData(data) {
      // console.log(data.name, data.location);
      // console.log(data, data.stargazers_count);
      //
      console.log(data.length);
      console.log(data[0].stargazers_count);
      return;
    });
  } else {
    console.log("Insert Problem Here", response.status);
  }
});

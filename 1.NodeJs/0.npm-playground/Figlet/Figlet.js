var figlet = require("figlet");

figlet("Peace!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  } else {
    console.log(data);
  }
});

const express = require("express");
const app = express();

const server = app.listen(8080, function() {
  console.log("server is running on port 8080");
});

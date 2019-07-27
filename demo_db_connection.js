// const mysql = require("mysql");
// const connection = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "user",
//   password: "willSQL1",
//   database: "database name"
// });
// connection.connect(err => {
//   if (err) throw err;
//   console.log("Connected!");
// });

// alias:
// alias mysql=/usr/local/mysql/bin/mysql
// // alias mysqladmin=/usr/local/mysql/bin/mysqladmin
// Welcome to the MySQL monitor.  Commands end with ; or \g.
// Your MySQL connection id is 13
// Server version: 8.0.17-commercial MySQL Enterprise Server - Commercial

var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password1",
  insecureAuth: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

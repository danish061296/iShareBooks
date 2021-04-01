const mysql = require('mysql');
const dotenv= require("dotenv");
dotenv.config({path: "./.env"});
var db= mysql.createConnection({
  host     : process.env.HOST,
  user     : 'root',
  password : process.env.PASSWORD,
  database: process.env.DATABASE,
  multipleStatements:true
});


db.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + db.threadId);
});

module.exports=db;
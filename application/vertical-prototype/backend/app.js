const express = require("express");
const app = express(); 
const db =  require("./dataBase.js");
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const fileUpload = require('express-fileupload');
var cors = require('cors')
app.use(cors({
	origin: ["http://localhost:3000"],
	methods: ["GET", "POST"],
	credentials: true,
	}))
app.use(fileUpload());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use("/",require("./routes/auth"));
app.use("/",require("./routes/post"));
app.use("/",require("./routes/comments"));
app.use(cookieParser());
const port =process.env.PORT||3001;
app.listen(port,(req,res)=>
{
  console.log(`running on port ${port}`);
}) 

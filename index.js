/*
var express        = require("express");
var mongoose       = require("mongoose");
var bodyParser     = require("body-parser");
var methodOverride = require("method-override");
var app = express();

// DB setting
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true });
var db = mongoose.connection;
db.once("open", function(){
  console.log("DB connected");
});
db.on("error", function(err){
  console.log("DB ERROR : ", err);
});

// Other settings
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));

// Routes
app.use("/", require("./routes/home"));
app.use("/contacts", require("./routes/contacts"));

// Port setting
var port = 3000;
app.listen(port, function(){
  console.log("server on! http://localhost:"+port);
});
*/
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser"); //node.js의 post요청 데이터 추출
var methodOverride = require("method-override");//put, delete
var app = express();

// DB setting
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true });
var db = mongoose.connection;
db.once("open", function(){
  console.log("DB connected");
});
db.on("error", function(err){
  console.log("DB ERROR : ", err);
});

//other settings
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));//_method으로 들어오는 값을 바꿈

// Routes
app.use("/", require("./routes/home"));
app.use("/contacts", require("./routes/contacts"));

//port setting
var port = 3000;
app.listen(port, function(){
  console.log("server on! http://localhost:"+port);
});

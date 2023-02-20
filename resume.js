const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/public/html/boiler plate.html");
})

app.post("/",function(req,res){
    console.log("wwwwwwwwwwww")
    res.sendFile(__dirname + "/public/html/contact.html");
})

app.listen(3000, function () {
    console.log("listening on 3000");
})

const express = require("express");
const app = express();
const path =  require("path");
let port = 8080;

//EJS
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.get("/",(req,res)=>{
    res.render("home.ejs");
})
app.listen(port,()=>{
    console.log("Request Recieved");
})

//Dice function
app.get("/Dice",(req,res)=>{
    let dicevalue = Math.floor(Math.random()*6+1);
    res.render("dice.ejs",{num:dicevalue});
})

//Insta Page

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    res.render("instagram.ejs",{username});
})

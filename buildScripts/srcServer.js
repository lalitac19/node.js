
const express = require("express");
const axios = require("axios");
const path = require("path");
const open = require("open");
const port = 3000;
const app = express();

app.get("/get", (req, res) => {
axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=29ab70bc')
  .then(response=>res.send(response.data));
});
 


app.get("/", (req, res) => {
res.sendFile(path.join(__dirname,"../src/index.html"));
});
app.listen(port, (err) => {
if(err){
console.log(err);
} else{
open("http://localhost:" + port);
}
});
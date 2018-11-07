import webpack from "webpack"
import config from "../webpack.config.dev";
const compiler = webpack(config);
app.use(require("webpack-dev-middleware")(compiler, {
noInfo: true,
publicPath:config.output.publicPath
}));

const express = require("express");
const path = require("path");
const open = require("open");
const port = 3000;
const app = express();
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
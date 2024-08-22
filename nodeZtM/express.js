const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"))

// app.get("/:id", (req, res) => {
//     console.log(req.params)
//     res.status(404).send("not found root")
//     // req.body
//     // req.headers
//     // req.params
// })

// app.get("/profile", (req, res) => {
//     res.send("gettingprofile")
// })

// app.post("/profile", (req, res) => {
//     console.log(req.body);
//     res.send("success")
// })
app.listen(4000);
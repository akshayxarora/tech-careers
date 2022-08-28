const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get("/home", (req, res) => {
    res.json({
        name: "Bill",
        age: 99
    })
})


app.listen(4000, () => console.log("Server is up"));
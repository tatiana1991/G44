const express = require("express");
const app = express();
let personal_shoppers = ['Tatiana', 'Bianca'];

app.get("/app/controllers/personal_shopper.constroller.js", function(req, res) {
    res.json(personal_shoppers);
});

module.exports = app;
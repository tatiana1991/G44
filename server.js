const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

const db = require("./app/models/");
const personal_shopperModel = require("./app/models/personal_shopper.model");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the daabase!", err);
    process.exit();
  });

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
/*
app.get("/", (req, res) => {
    res.json({ message: "Benvenuto to Shopping4U." });
  });
*/
app.get('/', function(req,res){
    res.render('index.ejs');
 });

 app.get('/personal_shopper', function(req,res){
    res.render('personal_shopper.ejs');
 });

 app.get('/ingaggi', function(req,res){
    res.render('ingaggi.ejs');
 });

require("./app/routes/personal_shopper.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

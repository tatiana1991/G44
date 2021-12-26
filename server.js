const express = require('express');
const mongoose = require('mongoose');
//const routes = require("./routes/personal_shopper");

mongoose.set('useNewUrlParser', true); 
mongoose.set('useFindAndModify', false); 
mongoose.set('useCreateIndex', true); 
mongoose.set('useUnifiedTopology', true); 

mongoose.connect('mongodb://localhost:27017/test');

var con = mongoose.connection;
con.on('error', function (err){
    console.log('errore di connessione', err);
});

con.once('open', function (){
   console.log('connessione riuscita!');
});

const app = express();
app.use(express.json());
//app.use("/api", routes);
app.set('view engine', 'ejs');

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// index page
app.get('/', function(req,res){
  res.render('index.ejs');
});

const PersonalShopper = mongoose.model("personalShopper", {
  "id": Number,
  "Name": String,
  "Location": String,
  "Evaluation": Number
});

//
// personal shoppers page
app.get('/personal_shoppers', function (req, res) {
    const names = PersonalShopper.find({});
    res.render('personal_shopper', {names: names});
});

// Mongoose schema
const ingaggiSchema = mongoose.Schema({
  NomePersonalShopper: {
      type: String,
      required: true,
      unique: false,
  },
  MacrocategoriaProdotto: {
      type: String,
      required: false,
      unique: false,    
  },
  IndirizzoDiConsegna: {
      type: String,
      required: false,
      unique: false,
  },
  MailUtente: {
      type: [String],
      required: true,
      unique: false,
  },
})
var ingaggidata = mongoose.model('ingaggidata',ingaggiSchema);
//module.exports= ingaggidata;

//
// ingaggi page
app.get('/ingaggi', function(req,res){
  const gigi = ingaggidata.find({});
  res.render('ingaggi.ejs', {gigi: gigi});
});

//require("./routes/personal_shopper.routes")(app);
module.exports = app;

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

var con = mongoose.connection;
con.on('error', function (err){
    console.log('errore di connessione', err);
});

con.once('open', function (){
   console.log('connessione riuscita!');
});
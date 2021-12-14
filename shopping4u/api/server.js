const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Shopping4U:Ingegneria@cluster0.irypm.mongodb.net/test", {
    useNewUrlParser: true
});



const app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

const PersonalShopperSchema = new mongoose.Schema({ "id": Number, "Name": String, "Location": String, "Evaluation": Number });
const PersonalShopper = mongoose.model('personalShopper',PersonalShopperSchema);



// index page
app.get('/', function (req, res) {
    res.render('pages/index');
});


// personal shoppers page
app.get('/personalShoppers', async function (req, res) {
    // Find all personal shoppers
    const personalShoppers = await PersonalShopper.find({});
    console.log(personalShoppers);
    res.render('pages/personalShoppers', { personalShoppers });
});



app.listen(8080);
console.log('Server is listening on port 8080');
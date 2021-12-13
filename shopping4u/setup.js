const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Shopping4U:Ingegneria@cluster0.irypm.mongodb.net/test", {
    useNewUrlParser: true
});

/*
const PersonalShopper = mongoose.model("personalShopper", {
    id: Number,
    Name: String,
    LLocation: String,
    valuation: Number
});


const personalShopperExample = [
    { Name: "Monica Zamberlan"},
    { Name: "Martina Girotti" }
];
*/

PersonalShopper.insertManyPersonalShoppers(personalShopperExample)
    .then(() => {
        console.log("PersonalShoppers Added");
        mongoose.connection.close();
    })
    .catch(err => console.error(err));
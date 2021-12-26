var mongoose = require('mongoose')
var assert = require('assert')

mongoose.connect('mongodb://localhost:27017/test');

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
        required: false,
        unique: false,
    },
  })

  var ingaggidata = mongoose.model('ingaggidata',ingaggiSchema);


    data = [
        {
            "NomePersonalShopper": "Monica Zamberlan",
            "MacrocategoriaProdotto": "Idee regalo",
            "IndirizzoDiConsegna": "Via S.Giovanni 3, San Bonifacio (VR)"
        },
        {
            "NomePersonalShopper": "Martina Girotti",
            "MacrocategoriaProdotto": "Gioielleria",
            "IndirizzoDiConsegna": "Via IV Novembre 76, Bussolengo (VR)"
        },
        {
            "NomePersonalShopper": "Giacomo Rizzi",
            "MacrocategoriaProdotto": "Abbigliamento",
            "IndirizzoDiConsegna": "Via Rosmini 56, Parona (VR)"
        },
        {
            "NomePersonalShopper": "Valeria Marchi",
            "MacrocategoriaProdotto": "Abbigliamento",
            "IndirizzoDiConsegna": "Via XXV Aprile 30, Zevio (VR)"
        },
        {
            "NomePersonalShopper": "Marco Mizzon",
            "MacrocategoriaProdotto": "Abbigliamento",
            "IndirizzoDiConsegna": "Via Carrari 135, Sommacampagna (VR)"
        },
        {
            "NomePersonalShopper": "Greta Pilon",
            "MacrocategoriaProdotto": "Abbigliamento",
            "IndirizzoDiConsegna": "Via Bellavista 13, Custoza (VR)"
        },
        {
            "NomePersonalShopper": "Alice Beatrici",
            "MacrocategoriaProdotto": "Abbigliamento",
            "IndirizzoDiConsegna": "Via Saturno 34, Santa Maria (VR)"
        }
    ];

 ingaggidata.collection.insertMany(data, function(err,r) {
    assert.equal(null, err);
    assert.equal(7, r.insertedCount);

    db.close();
});
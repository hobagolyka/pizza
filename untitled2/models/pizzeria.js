var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Pizzeria = db.model('User', {
    nev: String,
    iranyitoszam: String,
    telepules: String,
    utca: String,
    hazszam: String,
    url: String,
    kinalat: [
        {pnev: String, ar: String}
    ]
});

module.exports = Pizzeria;
var Schema = require('mongoose').Schema;
var db = require('../config/db');

var User = db.model('User', {
    felhasznalo_nev: String,
    nev: String,
    iranyitoszam: String,
    telepules: String,
    utca: String,
    hazszam: String,
    emelet: String,
    ajto: String,
    kapucsengo: String,
    rendelesek: [{
        statusz: String,
        idopont: String,
        pizzak: [{darab: String, pizza: String}]
    }]
});

module.exports = User;
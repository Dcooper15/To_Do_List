const host = "lallah.db.elephantsql.com";
const database = "ptipivmi";
const user = "ptipivmi";
const password = "12Pn8mflYINGRN5ZlU2wXwapG8bjgeTS";

// can use this for almost all pgp's
const pgp = require('pg-promise') ({
    query: function (event) {
        //console.log("QUERY:", event.query);
    }
});

const options = {
    host: host,
    database: database,
    user: user,
    password: password,
}

const db = pgp(options);
module.exports = db;
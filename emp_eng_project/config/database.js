const pool = require("mysql");

var connection = pool.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "emp_eng_schema",
});

connection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Database connected");
});

module.exports = connection;


const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "db_retail_store",
});

function connectDB() {
  db.connect((err) => {
    if (err) {
      return console.error({
        error: err.sqlMessage,
        message: "Database connection failed",
      });
    }

    console.log("Connected to the MySQL database.");
  });
}
module.exports = { connectDB, db };

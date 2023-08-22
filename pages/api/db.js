const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = 3306;

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "user_wallet",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Database connected");
  }
});

app.post("/save-wallet", (req, res) => {
  const { address, privateKey } = req.body;

  const sql = "INSERT INTO wallets (address, private_key) VALUES (?, ?)";
  db.query(sql, [address, privateKey], (err, result) => {
    if (err) {
      console.error("Error saving wallet:", err);
      res.status(500).json({ error: "An error occurred" });
    } else {
      console.log("Wallet saved to database");
      res.status(200).json({ message: "Wallet saved successfully" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

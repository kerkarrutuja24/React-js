const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "user_app",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("MySQL Connected");
  }
});


app.post("/register", async (req, res) => {
  const {
    first_name,
    last_name,
    email_id,
    password,
  } = req.body;

  try {
    const hashedPassword =
      await bcrypt.hash(password, 10);

    const sql =
      "INSERT INTO users(first_name, last_name, email_id, password) VALUES (?, ?, ?, ?)";

    db.query(
      sql,
      [
        first_name,
        last_name,
        email_id,
        hashedPassword,
      ],
      (err, result) => {
        if (err) {
          return res.status(500).json(err);
        }

        res.json({
          message: "User Registered",
        });
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
});


app.post("/login", (req, res) => {
  const { email_id, password } = req.body;

  const sql =
    "SELECT * FROM users WHERE email_id=?";

  db.query(sql, [email_id], async (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (result.length === 0) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    const user = result[0];

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email_id: user.email_id,
      },
      "secretkey",
      {
        expiresIn: "1d",
      }
    );

    res.json({
      message: "Login Success",
      token,
      user: {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email_id: user.email_id,
      },
    });
  });
});


app.get("/", (req, res) => {
  res.send("Backend Working");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
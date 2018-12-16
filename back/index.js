const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const fs = require("fs");
const app = express();
const secret = "demo__system";
const PORT = process.env.PORT || 3000;

app.use(cors("*"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello");
});

let ID = 0;

const usersfile = "../react-demo/src/db/users.json";

app.post("/register", (req, res) => {
  let {
    name,
    lastname,
    username,
    password,
    email,
    birthdate,
    balance
  } = req.body;

  const user = {
    id: "" + ID,
    name,
    lastname,
    username,
    password: encrypt(password),
    email,
    birthdate,
    balance,
    level: 1,
    boughtProducts: []
  };

  fs.readFile(usersfile, function(err, data) {
    let json = JSON.parse(data);
    json.push(user);
    console.log(json);
    fs.writeFile(usersfile, JSON.stringify(json), function(err) {
      if (err) res.redirect(`http://localhost:${PORT}`);
      res.redirect(`http://localhost:${PORT}/`);
    });
  });
  ID++;
});

const encrypt = data => {
  const hash = crypto
    .createHmac("sha256", secret)
    .update(data)
    .digest("hex");
  return hash;
};

app.post("/login", (req, res) => {
  let { username, password } = req.body;

  let foundUser = {
    id: -1,
    level: -1,
    auth: false
  };

  fs.readFile(usersfile, (err, data) => {
    let users = JSON.parse(data);
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].username == username &&
        users[i].password === encrypt(password)
      ) {
        foundUser = {
          id: users[i].id,
          level: users[i].level,
          auth: true,
          username: users[i].username
        };
        break;
      }
    }
    res.json(foundUser);
  });
});

app.post("/delete", (req, res) => {
  console.log(req.body);
  const { username } = req.body;
  fs.readFile(usersfile, function(err, data) {
    let json = JSON.parse(data);
    console.log(json);
    json.splice(json.findIndex(user => user.username === username), 1);
    fs.writeFile(usersfile, JSON.stringify(json), function(err) {
      if (err) res.json(err);
      res.json(json);
    });
  });
});

app.listen(5000, () => {
  console.log(`Listening Port - 5000`);
});

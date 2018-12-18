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
  console.log(processFile());
});


const usersfile = "../react-demo/src/db/users.json";
let ID ;

  fs.readFile(usersfile, function(err,data){
    if (err){
      console.log(err);
    }
    let json = JSON.parse(data);
    // console.log(json);
    let last = json.pop();
    // console.log(last, 'gamoaq');
    // console.log(last.id, 'ramdenia idi');

    ID =  "" + (Number(last.id) + 1)  
    // console.log(ID, 'gamoaq?');
    // console.log(ID, 'ssa');
    let id = "" + ID;
    return ID;
    processFile();
  })


function processFile() {
  // console.log(ID, "aqedan");
  return ID
}

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
    id: "" + processFile(),
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
    // console.log(json);
    fs.writeFile(usersfile, JSON.stringify(json), function(err) {
      if (err) res.redirect(`http://localhost:${PORT}`);
      res.redirect(`http://localhost:${PORT}/`);
    });
  });
  // ID++;
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

app.post('/edit', (req,res) =>{
  console.log(req.body);
  let newusername = req.body.newUsername;
  console.log(newusername);
  fs.readFile(usersfile, function(err,data){
    let json = JSON.parse(data);
    // console.log(json);
    function findUser(item){
      return item.id == req.body.id
    }
    let idx = json.findIndex(findUser);
    // console.log(idx, 'index');
    json[idx].username = newusername 
    fs.writeFile(usersfile, JSON.stringify(json), function(err){
      if (err) res.json(err);
      res.json(json);
    })
  })
})

app.post("/delete", (req, res) => {
  let  todeleteusername  = req.body;
  fs.readFile(usersfile, function(err, data) {
    let json = JSON.parse(data);
    function findUser(item) { 
      return item.username == todeleteusername.e;
  }
    let idx = json.findIndex(findUser)
    json.splice(idx, 1);
    fs.writeFile(usersfile, JSON.stringify(json), function(err) {
      if (err) res.json(err);
      res.json(json);
    });
  });
});

app.listen(5000, () => {
  console.log(`Listening Port - 5000`);
});

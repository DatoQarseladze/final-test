const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const fs = require("fs");
const app = express();
const secret = "demo__system";
const PORT = process.env.PORT || 3000;
const Joi = require("joi");
let products = require("../react-demo/src/db/products");
const path = require("path");
const bodyParser = require("body-parser");
const altPro = "../react-demo/src/db/products.json";

app.use(cors("*"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello");
  console.log(processFile());
});

const usersfile = "../react-demo/src/db/users.json";
const productfile = "../react-demo/src/db/products.json";
const chatBase = '../react-demo/src/db/messages.json'

let ID;

app.post("/register", (req, res, err) => {
  console.log(req.body, "araferia");
  console.log("movedit");
  let {
    name,
    lastname,
    username,
    password,
    email,
    birthdate,
    balance
  } = req.body;
  fs.readFile(usersfile, function(err, data) {
    // const errorMessage = 'same username'
    let json = JSON.parse(data);
    function findUsername(user) {
      return user.username === username;
    }
    if (json.find(findUsername)) {
      res.send('same');
    } else {
      fs.readFile(usersfile, function(err, data) {
        if (err) {
          console.log(err);
        }

        let json = JSON.parse(data);
        let last = json.pop();
        ID = "" + (Number(last.id) + 1);

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
          fs.writeFile(usersfile, JSON.stringify(json), function(err, data) {
            if (err) res.send(`http://localhost:${PORT}/`);
            res.send(`http://localhost:${PORT}/`);
          });
        });
      });
    }
  });
});

app.get("/headphones", (req, res) => {
  res.json(products.HEADPHONES);
});
app.get("/phones", (req, res) => {
  res.json(products.PHONES);
});
app.get("/laptops", (req, res) => {
  res.json(products.LAPTOPS);
});
app.get("/cameras", (req, res) => {
  res.json(products.CAMERAS);
});

// selected item
app.get("/headphones/:id", (req, res) => {
  const id = req.params.id;
  const item = products.HEADPHONES.find(i => i.id == id);
  res.json(item);
});

// writing a review
app.post("/headphones/:id", (req, res) => {
  fs.readFile("../react-demo/src/db/products.json", function(err, data) {
    let json = JSON.parse(data);
    const id = req.params.id;
    const item = products.HEADPHONES.find(i => i.id == id);
    const review = { user: req.body.user, text: req.body.text };
    item.reviews.unshift(review);
    fs.writeFile(
      "../react-demo/src/db/products.json",
      JSON.stringify(products),
      function(err) {
        if (err) throw err;
      }
    );
  });
});

app.get("/phones/:id", (req, res) => {
  const id = req.params.id;
  const item = products.PHONES.find(i => i.id == id);
  res.json(item);
});
app.post("/phones/:id", (req, res) => {
  fs.readFile("../react-demo/src/db/products.json", function(err, data) {
    let json = JSON.parse(data);
    const id = req.params.id;
    const item = products.PHONES.find(i => i.id == id);
    const review = { user: req.body.user, text: req.body.text };
    item.reviews.unshift(review);
    fs.writeFile(
      "../react-demo/src/db/products.json",
      JSON.stringify(products),
      function(err) {
        if (err) throw err;
      }
    );
  });
});

// pushing chat problems
app.post('/chat', (req,res) =>{
  console.log(req.body, 'raxdeba to');
  let message = req.body.message;


  fs.readFile(chatBase, (err, data) => {
    let messages = JSON.parse(data);
    // console.log(users);
    // console.log(message);
  
    // }
    let last = messages.pop()
    // if (last === undefined){
    //   let ID = 0;
    //   return ID
    // }
    let ID = "" + (Number(last.id)+ 1);
    const messageDetails = {
      id: '' + ID,
      message: message
    }


    fs.readFile(chatBase, (err,data)=>{
      let mess = JSON.parse(data);
      mess.push(messageDetails);

      console.log(mess, 'raundato');
      fs.writeFile(chatBase, JSON.stringify(mess), function(err, data) {
        if (err) res.send(`http://localhost:${PORT}/`);
        res.send(message);
      });
    })

   
  
  });

})
app.get("/laptops/:id", (req, res) => {
  const id = req.params.id;
  const item = products.LAPTOPS.find(i => i.id == id);
  res.json(item);
});
app.post("/laptops/:id", (req, res) => {
  fs.readFile("../react-demo/src/db/products.json", function(err, data) {
    let json = JSON.parse(data);
    const id = req.params.id;
    const item = products.LAPTOPS.find(i => i.id == id);
    const review = { user: req.body.user, text: req.body.text };
    item.reviews.unshift(review);
    fs.writeFile(
      "../react-demo/src/db/products.json",
      JSON.stringify(products),
      function(err) {
        if (err) throw err;
      }
    );
  });
});
app.get("/cameras/:id", (req, res) => {
  const id = req.params.id;
  const item = products.CAMERAS.find(i => i.id == id);
  res.json(item);
});
app.post("/cameras/:id", (req, res) => {
  fs.readFile("../react-demo/src/db/products.json", function(err, data) {
    let json = JSON.parse(data);
    const id = req.params.id;
    const item = products.CAMERAS.find(i => i.id == id);
    const review = { user: req.body.user, text: req.body.text };
    item.reviews.unshift(review);
    fs.writeFile(
      "../react-demo/src/db/products.json",
      JSON.stringify(products),
      function(err) {
        if (err) throw err;
      }
    );
  });
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
  const schema = {
    username: Joi.string()
      .min(4)
      .required(),
    password: Joi.string()
      .min(4)
      .required()
  };
  const result = Joi.validate(req.body, schema);

  // console.log(result);

  if (result.error) {
    return res.status(400).json({ message: result.error.details[0].message });
  }
  console.log(username);
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
    res.send(foundUser);
  });
});

app.get("/getreviewsusers", (req, res) => {
  console.log("ahaha");
  fs.readFile(productfile, function(err, data) {
    let json = JSON.parse(data);
    const users = [];
    for (let i = 0; i < json.HEADPHONES.length; i++) {
      if (json.HEADPHONES[i].reviews.length >= 1) {
        for (let z = 0; z < json.HEADPHONES[i].reviews.length; z++) {
          users.push(json.HEADPHONES[i].reviews[z].user);
        }
      }
      if (users.length < 4) {
        for (let k = 0; k < json.PHONES.length; k++) {
          if (json.PHONES[k].reviews.length >= 1) {
            for (let y = 0; y < json.PHONES[k].reviews.length; y++) {
              if (users.length < 4) {
                users.push(json.PHONES[k].reviews[y].user);
              }
            }
          }
        }
      }
    }

    res.send(users);
  });
});

app.get("/getreviews", (req, res) => {
  fs.readFile(productfile, function(err, data) {
    let json = JSON.parse(data);
    const users = [];
    const array = [];
    for (let i = 0; i < json.HEADPHONES.length; i++) {
      if (json.HEADPHONES[i].reviews.length >= 1) {
        for (let z = 0; z < json.HEADPHONES[i].reviews.length; z++) {
          array.push(json.HEADPHONES[i].reviews[z].text);
          // users.push(json.HEADPHONES[i].reviews[z].user)
        }
      }
      if (array.length < 4) {
        for (let k = 0; k < json.PHONES.length; k++) {
          if (json.PHONES[k].reviews.length >= 1) {
            for (let y = 0; y < json.PHONES[k].reviews.length; y++) {
              // console.log('shamovida')
              if (array.length < 4) {
                array.push(json.PHONES[k].reviews[y].text);
                // users.push(json.HEADPHONES[k].reviews[y].user)
              }
            }
          }
        }
      }
    }

    // console.log(array)
    res.send(array);
  });
});

app.post("/edit", (req, res) => {
  console.log(req.body);
  let newusername = req.body.newUsername;
  console.log(newusername);
  fs.readFile(usersfile, function(err, data) {
    let json = JSON.parse(data);
    function findUser(item) {
      return item.id == req.body.id;
    }
    let idx = json.findIndex(findUser);
    json[idx].username = newusername;
    fs.writeFile(usersfile, JSON.stringify(json), function(err) {
      if (err) res.json(err);
      res.json(json);
    });
  });
});

app.get("/user", (req, res) => {
  fs.readFile(usersfile, function(err, data) {
    let json = JSON.parse(data);
    res.json(json);
  });
});
app.post("/delete", (req, res) => {
  let todeleteusername = req.body;
  fs.readFile(usersfile, function(err, data) {
    let json = JSON.parse(data);
    function findUser(item) {
      return item.username == todeleteusername.e;
    }
    let idx = json.findIndex(findUser);
    json.splice(idx, 1);
    fs.writeFile(usersfile, JSON.stringify(json), function(err) {
      if (err) res.json(err);
      res.json(json);
    });
  });
});

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// products
app.get("/headphones", (req, res) => {
  res.json(products.HEADPHONES);
});
app.get("/phones", (req, res) => {
  res.json(products.PHONES);
});
app.get("/laptops", (req, res) => {
  res.json(products.LAPTOPS);
});
app.get("/cameras", (req, res) => {
  res.json(products.CAMERAS);
});

// selected item
app.get("/headphones/:id", (req, res) => {
  const id = req.params.id;
  const item = products.HEADPHONES.find(i => i.id == id);
  res.json(item);
});

// writing a review
app.post("/headphones/:id", (req, res) => {
  fs.readFile("../react-demo/src/db/products.json", function(err, data) {
    let json = JSON.parse(data);
    const id = req.params.id;
    const item = products.HEADPHONES.find(i => i.id == id);
    const review = { user: req.body.user, text: req.body.text };
    item.reviews.unshift(review);
    fs.writeFile(
      "../react-demo/src/db/products.json",
      JSON.stringify(products),
      function(err) {
        if (err) throw err;
      }
    );
  });
});
app.get("/get", (req, res) => {
  fs.readFile(altPro, function(err, data) {
    let json = JSON.parse(data);
    res.json(json);
  });
});

app.post("/addToCart", (req, res) => {
  const { x, y, z } = req.body;
  // console.log(x,y);
  fs.readFile(altPro, function(err, data) {
    let json = JSON.parse(data);
    console.log(x);
    // console.log(json[z])
    // console.log(json[z])
    let findProduct = json[z].find(product => product.id == x);
    fs.readFile(usersfile, function(err, data) {
      let json = JSON.parse(data);
      let index = json.findIndex(user => user.id === "" + y);
      json[index].onCart.push(findProduct);
      fs.writeFile(usersfile, JSON.stringify(json), function(err) {
        if (err) res.json(json);
        res.json({ message: "Product has been Added" });
      });
    });
  });
});

app.post('/bought',(req,res)=>{
  const{k,arr,arrU,qua,user} = req.body;
  fs.readFile(usersfile, function(err,data){
    let json = JSON.parse(data);
    console.log(json);
    let index = json.findIndex(user1 => user1.id === user.id);
    console.log(k);
  //  json[index].onCart.push(arr);
   json[index].boughtProducts.push(arrU)
   json[index].balance = ''+k;
   json[index].onCart = arr;
   console.log( json[index].balance )
  //  console.log(json[index].onCart.length)
  //  console.log(json[index].boughtProducts)
    fs.writeFile(usersfile,JSON.stringify(json),function(err){
      if(err) res.json(json);
      res.json({message : 'Changed'})
    })
  }) 
})


app.post("/products", (req, res) => {
  let { id, brand, url, model, price, desc, color, cat } = req.body;

  const product = {
    id,
    brand,
    url,
    model,
    price,
    desc,
    color,
    quantity: "",
    reviews: []
  };
  category = cat;
  fs.readFile(altPro, function(err, data) {
    console.log(cat);
    // console.log(altPro)
    let json = JSON.parse(data);
    console.log(json[cat]);
    json[cat].push(product);
    // console.log(json)

    // json.push(product)
    fs.writeFile(altPro, JSON.stringify(json), function(err) {
      if (err) res.redirect(`http://localhost:${PORT}`);
      res.redirect(`http://localhost:${PORT}/`);
    });
  });
});

app.get("/phones/:id", (req, res) => {
  const id = req.params.id;
  const item = products.PHONES.find(i => i.id == id);
  res.json(item);
});
app.get("/laptops/:id", (req, res) => {
  const id = req.params.id;
  const item = products.LAPTOPS.find(i => i.id == id);
  res.json(item);
});
app.get("/cameras/:id", (req, res) => {
  const id = req.params.id;
  const item = products.CAMERAS.find(i => i.id == id);
  res.json(item);
});

app.listen(5000, () => {
  console.log(`Listening Port - 5000`);
});

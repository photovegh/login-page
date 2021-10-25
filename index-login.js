//import path from 'path';

const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const app = express();

path;
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.static("public/js"));
app.use(express.static("public/css"));
app.use(express.static("public/img"));
app.set("port", process.env.PORT || 9999);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
  //res.sendFile('i:/test/login-page/views/index.html');
  //res.send(console.log(path.join(__dirname, '/views/index.html')));
  //res.send(res.send('Hello World! 😊 *** ROOT ***'));
});

app.get("/person", (req, res) => {
  /* 
    res.send(res.send('Hello World! 😊   *** PERSON ***'));
     */
  /* res.send(console.log('app.get/person is ok index login')); */

  const { MongoClient } = require("mongodb");
  const uri =
    "mongodb+srv://photovegh:Sususoft_0913@cluster0.gfjvb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect(async (err) => {
    const collection = client.db("login_page").collection("person");
    // perform actions on the collection object
    const person = await collection.find().toArray();
    client.close();

    res.send(person);
    console.log(person);
  });
});

app.listen(app.get("port"), function () {
  console.log(
    "Az expressz elindult a http: // localhost:" +
      app.get("port") +
      " helyen; a Ctrl-C megnyomásával zárja be a szervert."
  );
});

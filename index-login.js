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
});
//--------------------------------------------------------------------
//https://youtu.be/XPMlb5qd4jg?list=PL6VA7Z5zO0drUomWpim2NLm9kUcqhZQhJ
//--------------------------------------------------------------------
app.get("/person", (req, res) => {
    const client = getClient();

    client.connect(async (err) => {
        const collection = client.db("login_page").collection("person");
        // perform actions on the collection object
        const person = await collection.find().toArray();
        client.close();
        console.log("EZ most a *** BACKEND *** console logja");
        //res.json(person);
        res.send(person);
        console.log(
            "EZ IS a *** BACKEND *** console logja *** DE A res.send UTÁN *** tehát a script befejezi a múkodést???"
        );
    });
});

app.post("/person", bodyParser.json, (req, res) => {
    const newPerson = {
        userName: "Jane Doe",
        email: "Jane@test.com",
        message: "Hmmm",
        history: "harem",
    };

    console.log("sendmongodb 3");
    //const newPerson = req.json;
    const client = getClient();
    client.connect(async (err) => {
        const collection = client.db("login_page").collection("person");
        // perform actions on the collection object
        //const person = await collection.find().toArray();
        const person = await collection.insertOne("newPerson");
        console.log("*** BACKEND *** newPerson");
        //res.json(newPerson);
        res.send(newPerson);
        console.log("***  newPerson is OK !!!***");
        client.close();
    });
});

function getClient() {
    const { MongoClient } = require("mongodb");
    const uri =
        "mongodb+srv://photovegh:Sususoft_0913@cluster0.gfjvb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    return new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

app.listen(app.get("port"), function () {
    console.log(
        "Az expressz elindult a http: // localhost:" +
            app.get("port") +
            " helyen; a Ctrl-C megnyomásával zárja be a szervert."
    );
});

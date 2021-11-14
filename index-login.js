const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const app = express();
const ObjectID = require("mongodb").ObjectID;
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
//--------- APP PRIVAT -----------------------------------------------
//--------------------------------------------------------------------
//https://youtu.be/XPMlb5qd4jg?list=PL6VA7Z5zO0drUomWpim2NLm9kUcqhZQhJ
//--------------------------------------------------------------------
//--------------------------------------------------------------------
app.get("/person", (req, res) => {
    const client = getClient();
    client.connect(async (err) => {
        const collection = client.db("login_page").collection("person");
        const person = await collection.find().toArray();
        client.close();
        res.send(person);
    });
});
//[[[[ CREATE.R.U.D. */* RUDC */*egyedi azonosító !!!!!!! ]]]]
app.post("/person", bodyParser.json(), (req, res) => {
    const newPerson = {
        userName: req.body.userName,
        email: req.body.email,
        message: req.body.message,
        history: req.body.history,
    };
    const client = getClient();
    client.connect(async (err) => {
        const collection = client.db("login_page").collection("person");
        const result = await collection.insertOne(newPerson);
        if (result.insertedCount) {
            res.send({ error: "nem lehet insertálni, azaz creálni" });
            console.log(result.insertedCount);
            return;
        }
    });
    res.send(newPerson);
    client.close();
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

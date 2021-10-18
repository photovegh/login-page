//import path from 'path';

const express = require('express');
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require('path')
const app = express();
path
app.use(bodyParser.json());
app.use(express.static("public"))
app.use(express.static("public/js"))
app.use(express.static("public/css"))
app.use(express.static("public/img"))
app.set('port', process.env.PORT || 9999);

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
    //res.sendFile('i:/test/login-page/views/index.html');
    //res.send(console.log(path.join(__dirname, '/views/index.html')));
  })

app.listen(app.get('port'), function () {
    console.log('Az expressz elindult a http: // localhost:' + app.get('port') + ' helyen; a Ctrl-C megnyomásával zárja be a szervert.');
});
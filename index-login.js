import express from 'express';
//import bodyParser from "body-parser";
var app = express();
app.set('port', process.env.PORT || 9999);
//app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World! 😋')
  })

app.listen(app.get('port'), function () {
    console.log('Az expressz elindult a http: // localhost:' + app.get('port') + ' helyen; a Ctrl-C megnyomásával zárja be a szervert.');
});
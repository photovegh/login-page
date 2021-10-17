
import express from 'express';
import bodyParser from "body-parser";
import fs from "fs";
const app = express();

app.use(bodyParser.json());
app.use(express.static("public"))
app.set('port', process.env.PORT || 9999);

  app.get('/', (req, res) => {
    res.sendFile('i:/test/login-page/views/index.html');
  })

app.listen(app.get('port'), function () {
    console.log('Az expressz elindult a http: // localhost:' + app.get('port') + ' helyen; a Ctrl-C megnyomásával zárja be a szervert.');
});
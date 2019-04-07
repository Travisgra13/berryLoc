const express = require('express');
var firebase = require("firebase");
var admin = require('firebase-admin');
const app = express();
app.use(express.static('./'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => console.log('Server listening on port 3000!'));

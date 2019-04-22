const express = require('express');
const path = require('path');
const parser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(parser.json());

app.use(express.static(path.join(__dirname, '../dist')))


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})
//Router for Server


app.listen(PORT, () => {
  console.log("Listening to port: ", PORT)
})

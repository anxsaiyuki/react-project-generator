const express = require('express');
const path = require('path');
const parser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(parser.json());

app.use(express.static(path.join(__dirname, '../dist')))




app.listen(PORT, () => {
  console.log("Listening to port: ", PORT)
})

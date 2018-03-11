const express = require('express');
const path = require('path');
const parser = require('body-parser');
<% if (serverRouter) { for(var i=0; i<routerList.length; i++) {%>const <%= routerList[i] %> = require('./router/<%= routerList[i] %>')
<% }} %>
const app = express();
const PORT = 3000;

app.use(parser.json());

app.use(express.static(path.join(__dirname, '../dist')))

//Router for Server
<% if (serverRouter) { for(var i=0; i<routerList.length; i++) {%>app.use('/<%= routerList[i] %>', <%= routerList[i] %>)
<% }} %>

app.listen(PORT, () => {
  console.log("Listening to port: ", PORT)
})

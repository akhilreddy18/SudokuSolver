const express = require('express');
const app = express();
const port = 3000;
const routes = require("./routes/index");

app.use(express.static(__dirname + '/public'));
app.use(routes);

app.set("view engine", "ejs");

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
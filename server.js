
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;
// support parsing of application/json type post data

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes.js")(app);




require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function (){
    console.log("App listening on PORT: " + PORT);
});


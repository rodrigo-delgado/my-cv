var express = require('express');
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json());

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('app is running on PORT', app.get('port'));
});

var http = require("http");
setInterval(function() {
    http.get("http://rdelgado-cv.herokuapp.com");
}, 300000); // every 5 minutes (300000)

var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

//  Set the rendering engine to Embedded JS
app.set('view engine', 'ejs');

//  Establish the path of static assets.
app.use(express.static(__dirname + '/public'));

//  One route is all we need!
app.get('/', function(req, res){
  res.render('markdown');
});

app.listen(port);

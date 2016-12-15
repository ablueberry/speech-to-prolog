var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    app = express();


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// handler for GET /prolog which responds
// to the request with a JSON object
app.use(express.static(path.join(__dirname, 'src')));

app.post('/', function(req, res) {
  console.log(req.body.prolog);
})


// my_ip:3000/
app.listen(3000, '0.0.0.0', function() {});

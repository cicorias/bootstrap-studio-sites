var express = require("express");

var app = express();
app.use(express.static('public'));

//make way for some custom css, js and images
app.use('/bootstrap', express.static(__dirname + '/public/bootstrap'));
app.use('/fonts', express.static(__dirname + '/public/fonts'));
app.use('/img', express.static(__dirname + '/public/img'));
app.use('/js', express.static(__dirname + '/public/js'));


var server = app.listen(8081, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});


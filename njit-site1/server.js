const express = require("express");
const https = require('https');
const fs = require('fs');

const port = process.env.NODE_PORT || 3000;

const app = express();
app.use(express.static('public'));

//make way for some custom css, js and images
app.use('/bootstrap', express.static(__dirname + '/public/bootstrap'));
app.use('/fonts', express.static(__dirname + '/public/fonts'));
app.use('/img', express.static(__dirname + '/public/img'));
app.use('/js', express.static(__dirname + '/public/js'));


let sslOptions = {
    key: fs.readFileSync('/etc/letsencrypt/live/njit.cicoria.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/njit.cicoria.com/fullchain.pem')
 };

// let serverHttps = https.createServer(sslOptions, app).listen(443)

const server = https.createServer(sslOptions, app).listen(port, function(){
    console.log("Express server listening on port " + port);
  });


// pm2 start server.js --name
var express = require('express');
var app = express();
var fs = require("fs");
var path = require('path');


 var data=
 [
 { "no" : "1", "state" : "Destrict of Columbia", "lat" : "38.8964", "long" : "-77.0262", "wage": "10.50" },
 { "no" : "2", "state" : "Washington", "lat" : "47.3917", "long" : "-121.5708", "wage": "9.47" },
 { "no" : "3", "state" : "Oregon", "lat" : "44.5672", "long" : "-122.1269", "wage": "9.25" },
 { "no" : "4", "state" : "Connecticut", "lat" : "41.5834", "long" : "-72.7622", "wage": "9.60" },
 { "no" : "5", "state" : "Vermont", "lat" : "44.0407", "long" : "-72.7093", "wage": "9.60" },
 { "no" : "6", "state" : "Massachusetts", "lat" : "42.2373", "long" : "-71.5314", "wage": "10.00" },
 { "no" : "7", "state" : "Rhode Island", "lat" : "41.6772", "long" : "-71.5101", "wage": "9.60" },
 { "no" : "8", "state" : "California", "lat" : "36.1700", "long" : "-119.7462", "wage": "10.00" },
 { "no" : "9", "state" : "Alabama", "lat" : "32.7990", "long" : "-86.8073", "wage": "9.75" },
 { "no" : "10", "state" : "New York", "lat" : "42.1497", "long" : "-74.9384", "wage": "9.00" }  
 ];

app.listen(process.env.PORT || 8081);

app.get('/', function(req, res)
{

	res.sendFile(path.join(__dirname + '/practice.html'));

});

app.use(function(req, res, next) 
{
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
        next();  
});

app.get('/getdata', function(req, res)
{
	res.json(data);
});

console.log('server is ready at 8081');


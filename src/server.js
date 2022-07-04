var http = require("http");         // add http libraries
var crypto = require("crypto");
var express = require("express");   // add Express web server framework
var request = require("request");   // add "Request" library
var cors = require("cors");
var searchParams = require("@ungap/url-search-params");
var cookieParser = require("cookie-parser");


var client_id = 'CLIENT_ID';
var client_secret = 'CLIENT_SECRET';
var redirect_uri = 'REDIRECT_URI';

// http.createServer(function(request, response) {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello world");
//     response.end();
// }).listen(8888); 

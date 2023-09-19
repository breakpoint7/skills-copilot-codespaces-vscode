// Create web server
// node comments.js
// http://localhost:3000

// Load modules
var http = require('http');
var fs = require('fs');
var ejs = require('ejs');
var qs = require('querystring');

// Read template file
var index_page = fs.readFileSync('./index.ejs', 'utf8');
var other_page = fs.readFileSync('./other.ejs', 'utf8');
var style_css = fs.readFileSync('./style.css', 'utf8');

var max_num = 10; // Max number of data
var filename = 'mydata.txt'; // Data file

// Server processing
var server = http.createServer(getFromClient);

// Start server
server.listen(3000);
console.log('Server start!');

//

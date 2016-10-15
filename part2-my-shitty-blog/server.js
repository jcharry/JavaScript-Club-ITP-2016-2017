// Node uses a special function called 'require' to access installed packages
// We first initialize the express library with the next two lines
var express = require('express');
var app = express();

// These are extra libraries that are needed to handle POST data from
// a browser, as well as cookie data (which we didn't quite get to talk about)
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

// Load the user 'blog' data from a local json file. This data would
// generally come from a database, but to keep things we simple we're just
// loading fake user data locally
var secretPageData = require('./data.json');

// Set a port for express to listen on
var PORT = 3000;

// Tell express that we will serve the files in the 'static' folder
// as direct routes, so that our HTML files can have direct access
// to javascript files, images, etc.
app.use(express.static('static'));

// Body Parser gives access to POST data through Express
// We're then telling express to 'use' the body parser, which we've
// set up to expect JSON data coming over with a POST request
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);

// Tell express to use the cookie parser as well. This gives us access
// to cookies which are located on HTTP headers. We can use cookies to store
// tiny bits of data that we want to keep around, i.e. the user that is
// currently logged in
app.use(cookieParser());

// Define the home route that will get fired when the browser navigates to the
// page
// express gives us a callback function with two arguments, the request object,
// and the response obj (called req and res)
app.get('/', function(req, res) {
    // We use the response obj to send something back to the browser
    // in this case we're just sending our index.html file
    // We have use __dirname (a special node variable) that gives us the
    // path to current directory, so we can construct a full path to the
    // index.html file
    res.sendFile(__dirname + '/static/index.html');
});

// Handle route for our 'about' page
app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/static/about.html');
});

// Store a list of approved users
var listOfApprovedViewers = ['jamie', 'amy', 'blamey', 'john'];

// Handle POST request for when our user tries to login
app.post('/secret', function(req, res) {
    // POST data is stored on the req.body object (which is created by the
    // 'body-parser' module we defined above
    console.log(req.body);

    // Check if the username is in our list of approved users
    // array.indexOf will let us figure out if an item exists in an array
    // so we check if the username supplied in the POST request exists in
    // our list of approved users, and if so, send them the secret html page
    // if not, just send them a message
    if (listOfApprovedViewers.indexOf(req.body.username) !== -1) {
        // Before we send the secret page, let's set a cookie with the
        // username, so when the user asks for more data later, we know who is
        // making the request
        res.cookie('username', req.body.username);
        res.sendFile(__dirname + '/static/secret.html');
    } else {
        res.send('Haha, youre not allowed in!');
    }
});

// Handle AJAX request for secret user data
app.get('/secret-data', function(req, res) {
    console.log('requesting secret data');
    console.log(req.cookies);

    // Get the user from the cookie (note this is a GET request, so we can't
    // get a username from the req.body object like we would do with a POST
    // request. That's why we need the cookie - to store the user that is
    // logged in
    var user = req.cookies.username;

    // Get the data specfic to the user
    var userData = secretPageData[user];

    // Send the data back to the browser
    res.send(userData);
});

// Lastly, we have to start our express server using this function
// and give it the port we're listening on.  The PORT is the number that you'll
// have to navigate to in your browser - i.e. if PORT = 3000, i'll go to:
// localhost:3000 in my browser
app.listen(PORT, function() {
    console.log('listening on port ' + PORT);
});


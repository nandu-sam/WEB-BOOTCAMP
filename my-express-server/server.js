/*This line imports the express module. 
In Node.js, the require() function is used to import modules. 
The express module is a package that needs to be installed before it can be used.
 By requiring it, you make it available in your code.*/

const express = require("express");

/*This line creates an instance of the Express application. 
The express() function returns an Express application object that has various methods and 
properties to define routes, handle HTTP requests, and perform other web-related tasks. 
By convention, the variable app is used to store this instance.*/

const app = express();
app.get("/", function (req, res) {
    res.send("Hello");
});

/*Once you have created the app object, you can start defining routes and adding middleware
 to handle requests and responses. For example, you can define a route to handle 
 HTTP GET requests to the root URL ("/") using app.get("/", callback),
  where callback is a function that executes when a request is received.*/

app.get("/about", function (req, res) {
    res.send("Hello i am luxx who is a beginner who is starting to understand node and express js feel free to contact for other details at lux@gmail.com");
});


app.get("/contact", function (req, res) {
    res.send("Howdy you can contact me at lux@gmail.com");
});


//listen on  specific port
app.listen(3000, function () {
    console.log("Server started at port 3000");
});
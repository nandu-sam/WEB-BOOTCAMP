const express = require("express");
const bodyParser = require("body-parser");




const app = express();
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");// directory name plus the file name filepath of the current file no matter were it is hosted on cloud or where ever
});

app.post("/", function (req, res) {

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;





    res.send("The result of the calculation is : " + result);
});


app.listen(3000, function () {
    console.log("Server started at port 3000");
});








/*To send a entire file as response we have a method as res.sendFile(path[, options][, fn])
USE of the body parser because it allows us to go into any if your routes and can tap
 into something called request.body it is the past
 version of http request*/
var express = require('express');
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var user = [{
    name : "Ahmed",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [5,2,3,4,5,1,2,3,4,1]
},
{
    name : "irina",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [5,1,3,3,5,4,2,3,4,2]
}]


// switch (path) {
//     case "/survey":
app.get("/survey.html", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});
// default:
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});
// }

app.get('/api/friends', function (req, res) {
    return res.json(user)
});

app.post("/api/friends", function (req, res) {

    console.log(req.body);
    user.push(req.body);
    res.json(req.body);

});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
var express = require('express');
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
    return res.json(user);
});

app.post("/api/friends", function (req, res) {
    user.push(req.body);
    var object = calculateCompatibility(user);
    res.json(object);

});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});


var user = [{
    name: "Ahmed",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [5, 1, 5, 2, 5, 3, 1, 3, 4, 1]
},
{
    name: "irina",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [5, 1, 5, 2, 5, 3, 1, 3, 4, 2]
},
{
    name: "vi",
    photo: "https://d3295hraz5fimx.cloudfront.net/12739-thickbox_default/byron-man-sweatshirt.jpg",
    scores: [5, 1, 5, 2, 5, 3, 1, 3, 4, 3]
}]

function calculateCompatibility(arrayAnswers) {
    var suma = 0;
    var bestMAtch = 40;
    var position = 0;
    var index = arrayAnswers.length - 1;

    for (let i = 0; i < arrayAnswers.length - 1; i++) {
        for (let j = 0; j < arrayAnswers[i].scores.length; j++) {
            var number1 = parseInt(arrayAnswers[i].scores[j]);
            var number2 = parseInt(arrayAnswers[index].scores[j]);
            var resta = Math.abs(number1 - number2);
            suma = suma + resta;
        }
        if (bestMAtch > suma) {
            bestMAtch = suma;
            suma = 0;
            position = i;
        }
    }

    return arrayAnswers[position];

}



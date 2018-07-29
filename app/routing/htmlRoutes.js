var server = require('server');

var route = process.argv[2];

switch (route) {
    case "/survey":
        app.get("/survey.html", function (req, res) {
            res.sendFile(path.join(__dirname, "app/public/survey.html"));
        });
    default:
        app.get("/", function (req, res) {
            res.sendFile(path.join(__dirname, "app/public/home.html"));
        });
}

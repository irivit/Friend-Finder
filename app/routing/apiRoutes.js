var server = require('server');
var friend = require('friends.js');

app.get('/api/friends', function (req, res) {
    return res.json(user)
});

app.post("/api/friends", function (req, res) {

    console.log(req.body);
    user.push(req.body);
    res.json(req.body);

});
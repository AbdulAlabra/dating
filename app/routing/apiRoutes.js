
var friends = require("../data/friends.js")

// var match = friends.filter(function (obj) {
//     var x;
//     // if (obj.name === 'hhhh') {
//     //     obj.scores.reduce(function (sum) {
//     //          x =+ sum;
//     //         return console.log(x);
//     //     })
//     // }
// });
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        friends.push(req.body);
        res.json(true);

    });

} // end of the func 

//api routes
let friends = require('../data/friends.js');
let path = require('path');
module.exports = (app) => {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        friends.push(req.body);
        res.json(true); // KEY LINE
    });

    app.post('/api/clear', function (req, res) {
        // Empty out the arrays of data
        friends = [];
        console.log(friends);
    })
}
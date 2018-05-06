//api routes
let surveys = require('../data/friends.js');
let path = require('path');
module.exports = (app) => {

    app.get('/api/survey', function (req, res) {
        res.json(surveys);
    });

    app.get('/api/friends', function (req, res) {
        res.json(surveys);
    });

    app.post('/api/survey', function (req, res) {
        surveys.push(req.body);
        res.json(true); // KEY LINE
    });

    app.post('/api/clear', function (req, res) {
        // Empty out the arrays of data
        surveys = [];
        console.log(surveys);
    })
}
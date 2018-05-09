//api routes
let friends = require('../data/friends.js');
let path = require('path');
module.exports = (app) => {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {

        friends.push(req.body);

        //calculate the total difference
        let totalDifference = 0;
        const previous = friends[0]['scores'].reduce((total, amount) => total + amount);
        const current = friends[1]['scores'].reduce((total, amount) => total + amount);

        if (previous === current) {
            console.log('this is the exactly match!');
        }
        else if (previous > current) {
            console.log('the previous friend is the cloest match!');
        }
        else {
            console.log('your next friend is the cloest match!')
        }

        res.json(true); // KEY LINE
    });

    app.post('/api/clear', function (req, res) {
        // Empty out the arrays of data
        friends = [];
        console.log(friends);
    })
}
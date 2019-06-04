var express = require('express');
var router = express.Router();
var connection = require('../config/connection');


router.get("/", function(req, res) {
    connection.query('SELECT * FROM burgers', function(err, burgers){
        if (err) return res.json(500, err);
        console.log(burgers);
        res.render('index', 
        {data:burgers});
        console.log('connected');
    });
});

router.post('/api/post', function(req, res){
    console.log(req.body.burger_name)
    connection.query('INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)', [req.body.burger_name, req.body.devoured], function(err, data){
        if (err) return res.json(500, err);
        res.json(data);
    });
})

router.put('/api/devour', function(req, res){
    console.log(req);
    connection.query('UPDATE burgers VALUES (?) WHERE id=?', [req.body.devoured], req.body.id, function(){
        console.log('Done')
    })
})






module.exports = router;
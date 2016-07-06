var express = require('express');
var app = express();
var userData = require('./data/user.json'),
    questions = require('./data/questions.json')

app.get('/users',function(req,res){
    //console.log(userData);
    res.send(JSON.stringify(userData));
})

app.get('/questions',function(req,res){
    res.send(JSON.stringify(questions));
})

/*app.use('/#/signup',function(req,res){
    res.send(JSON.stringify(data));
});*/

app.use(express.static('public'));
app.listen(3000);
var express = require('express'), 
     fs = require('fs'),
    bodyParser = require('body-parser'),
    app = express(),
    portal = require('./portal.js');







app.use(bodyParser.json());         
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));



app.get('/users',portal.login);

app.get('/userInfo',portal.displayUserInfo);


app.get('/questions',portal.questions);


app.post('/signup',portal.signup);      


app.post('/addClasses',portal.addClasses);



app.get('/getmySubjects',portal.getmySubjects);



app.get('/getmyResults',portal.getmyResults);


app.post('/addquestion',portal.addquestion);


app.post('/setResult',portal.setResult);

app.get('/getMyResult',portal.getStudentResult);





app.listen(3000,function(){console.log("App is running")});
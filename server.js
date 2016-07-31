var express = require('express'),
    fs = require('fs'),
    bodyParser = require('body-parser');
var app = express();
var userData = require('./data/user.json'),
    questions = require('./data/QuestionBank.json'),
    userInfo = require('./data/userInfo.json');







app.use(bodyParser.json());         
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('public'));

var checkUser = function(email)
{
    var duplicateFlag = 0;
    
   
    
    /* callback after file read 
    var callback = function(flag)
    {
    
      if(flag)
      {
         
         
      }
        else
        {
           
        
        }
      
    } */
    /*-------- callback end -----*/
 var userDetails =  fs.readFileSync('./data/userInfo.json','utf-8');
    
     var users = JSON.parse(userDetails).Details;
        
       for(var i = 0 ;i<users.length;i++)
       {
          
           
            if(users[i].mail === email)
         {
             
            duplicateFlag = 1;
             break;
            
         }
          else
          {
              duplicateFlag  = 0 ;
             
          
          }
       }
    
    
    
    
    return duplicateFlag ;
}




app.get('/users',function(req,res){
    //console.log(userData);
    res.send(JSON.stringify(userData));
})

app.get('/userInfo',function(req,res){
    var data = JSON.stringify(userInfo);
    
    res.send(data);
})


app.get('/questions',function(req,res){
    //var 
    res.send(JSON.stringify(questions));
})

/*app.use('/#/signup',function(req,res){
    res.send(JSON.stringify(data));
});*/

app.post('/signup',function(req,res,next){
    //console.log("working");
   // console.log(req.body);
    var newUserDetails = {};
    var newUserCrendentials  = {};
    if(req.body.profession == "Student")
        {
            newUserDetails.Result = {"Math":null,"Science":null,"Computer_science":null}
            
        }
    newUserDetails.Name = newUserCrendentials.name =req.body.first ;
    newUserDetails.Class = req.body.cls;
    newUserDetails.mail = newUserCrendentials.mail = req.body.email;
    newUserDetails.profession = newUserCrendentials.profession =req.body.profession;
     newUserCrendentials.pass = req.body.pass;
    //console.log(newUserDetails);
   // console.log(newUserCrendentials);
    
    
    var responseMessage = {};
  if(checkUser(newUserDetails.mail) == 0)
  {
    
      //console.log("original");
 fs.readFile('./data/userInfo.json','utf-8',function(err,data){

      var originalContent = JSON.parse(data);
     originalContent.Details.push(newUserDetails);            fs.writeFileSync('./data/userInfo.json',JSON.stringify(originalContent));
     
      

});
      
 fs.readFile('./data/user.json','utf-8',function(err,data){
  if(err)
  {
     console.log(err);
  }
     else
     {
       var originaluserCrenedtials = JSON.parse(data);
     originaluserCrenedtials.userInfo.push(newUserCrendentials);            fs.writeFileSync('./data/user.json',JSON.stringify(originaluserCrenedtials));
     
     }
    
     
      

});      
      
responseMessage.message = "OK" ;
  }
    
else
{
   // console.log("duplicate");
   responseMessage.message = "E-mail already Registered" ;  

}
    
//console.log(responseMessage);

res.send(responseMessage);

})


//console.log(userInfo);

app.post('/addClasses',function(req,res){

fs.readFile('./data/userInfo.json','utf-8',function(err,data){
  if(err){
      res.send("An error occured while serve your request")
     }
    else
    {
       var detailsData = JSON.parse(data),
           allDetails = detailsData.Details;
        
        
      for(i in allDetails)
      {
          //console.log(i);
        if(allDetails[i].mail == req.body.Email)
        {
        
           allDetails[i].subject = req.body.sub;
            
            break;
        }
      
      }
       // console.log(allDetails);
    detailsData.Details = allDetails ;
     fs.writeFileSync('./data/userInfo.json',JSON.stringify(detailsData));
    
    }
    
    res.send({"message":"Added Successfully"});



})




});



app.get('/getmySubjects',function(req,res){

fs.readFile('./data/userInfo.json','utf-8',function(err,data){
    if(err)
    {
        res.send({"message":"Unable to find Your Subjects"});
      //res.send("unable to parse data");
    }
    else
    {
    var subjects = JSON.parse(data);
    res.send(subjects);
    
    }
    
    


})


});



app.get('/getmyResults',function(req,res){

fs.readFile('./data/userInfo.json','utf-8',function(err,data)
            {
if(err)
{
   res.send(err);
}
    else
    {
    var AllData = JSON.parse(data).Details,
        allStudents = AllData.filter(function(obj){
        return obj.profession == "Student"
        
        });
        res.send(allStudents);
        
    
    
    }

})



});


app.post('/addquestion',function(req,res){
    
    fs.readFile('./data/QuestionBank.json',function(err,data)
               {
        if(err)
            {
                res.send(" Network error");
            }
        else
            {
        var Allquestions = JSON.parse(data);
        var classquestions = Allquestions.questions;
        var myRequiredObj = null;
        var myRequiredSub = req.body.subject;
        classquestions.forEach(function(obj){
          
            if(Object.keys(obj)[0] == req.body.class)
                {
                    //console.log(obj[req.body.class][myRequiredSub]);
                   // console.log(myRequiredSub);
     obj[req.body.class][myRequiredSub].push(req.body.question) ;
                }
            
            
            
        });
        //console.log(JSON.stringify(Allquestions));
        fs.writeFileSync('./data/QuestionBank.json',JSON.stringify(Allquestions));
        res.send("OK");
            }
    })
    
})

app.post('/setResult',function(req,res){
    
   fs.readFile('./data/userInfo.json',function(err,data)
              {
       
       if(err)
           {
               res.send("Unable to fetch data")
           }
       else
           {
               var totalDetails = JSON.parse(data),
                   allStudents = totalDetails.Details,
                   sub = req.body.name,
                   requiredStudent = allStudents.filter(function(obj){
                   
                   return (obj.mail == req.body.Email)
                   
               });
               
               requiredStudent[0].Result[sub] = req.body.score;
                fs.writeFileSync('./data/userInfo.json',JSON.stringify(totalDetails));
           }
       
   })
    
});

app.get('/getMyResult',function(req,res){
    fs.readFile('./data/userInfo.json',function(err,data){
        if(err)
            {
                res.send("Unable to fetch details");
            }
        else{
            
            var totalDetails = JSON.parse(data),
                   allStudents = totalDetails.Details;
            res.send(allStudents)
        }
    })
})





app.listen(3000,function(){console.log("App is running")});
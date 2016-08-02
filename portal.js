var express = require('express'), 
     fs = require('fs'),
    bodyParser = require('body-parser'),
    app = express();




var userData = require('./data/user.json'),
    questions = require('./data/QuestionBank.json'),
    userInfo = require('./data/userInfo.json');


var userInfoDetails = null,
    userCredentialDetails  = null,
    questionBankDetails = null


app.use(bodyParser.json());         
app.use(bodyParser.urlencoded({ extended: true }));

var retriveUserInfoDetails = function()
{
     var userDetails =  fs.readFileSync('./data/userInfo.json','utf-8');
     userInfoDetails = JSON.parse(userDetails)  ;

}

var checkUser = function(email)
{

   var duplicateFlag = 0;
    /*var userDetails =  fs.readFileSync('./data/userInfo.json','utf-8');
     userInfoDetails = userDetails  ;*/
    retriveUserInfoDetails();
     var users = userInfoDetails.Details;
        
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

exports.login = function(req,res)
{
    res.header("Access-Control-Allow-Origin", "*");
    res.send(JSON.stringify(userData));
    retriveUserInfoDetails();
}

exports.displayUserInfo = function(req,res)
{
    var data = JSON.stringify(userInfo);
     res.header("Access-Control-Allow-Origin", "*");
    res.send(data);

}

exports.questions = function(req,res)
{
        res.header("Access-Control-Allow-Origin", "*");
    res.send(JSON.stringify(questions));

}


exports.signup = function(req,res)
{

    res.header("Access-Control-Allow-Origin", "*");
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
    
      console.log("original");
 fs.readFile('./data/userInfo.json','utf-8',function(err,data){

      var originalContent = JSON.parse(data);
     userInfoDetails = originalContent;
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
}



exports.addClasses = function(req,res)
{

res.header("Access-Control-Allow-Origin", "*");
  var allDetails =   userInfoDetails.Details;
   for(i in allDetails)
      {
          //console.log(i);
        if(allDetails[i].mail == req.body.Email)
        {
        
           allDetails[i].subject = req.body.sub;
            
            break;
        }
      
      }
 userInfoDetails.Details =   allDetails ;     fs.writeFileSync('./data/userInfo.json',JSON.stringify(userInfoDetails));

 res.send({"message":"Added Successfully"});   

}

exports.getmySubjects = function(req,res)
{
    retriveUserInfoDetails();
   res.header("Access-Control-Allow-Origin", "*");
    res.send(userInfoDetails);

}


exports.getmyResults = function(req,res)
{
    retriveUserInfoDetails();
     res.header("Access-Control-Allow-Origin", "*");
     var AllData = userInfoDetails.Details,
         allStudents = AllData.filter(function(obj){
              return obj.profession == "Student"
        
        });
        res.send(allStudents);
    


}

exports.addquestion = function(req,res)
{
     res.header("Access-Control-Allow-Origin", "*"); 
    fs.readFile('./data/QuestionBank.json',function(err,data)
               {
        if(err)
            {
                res.send(" Network error");
            }
        else
            {
        var Allquestions = JSON.parse(data),
            questionBankDetails = Allquestions,
            classquestions = Allquestions.questions,
             myRequiredObj = null,
             myRequiredSub = req.body.subject;
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
    
   

}


exports.setResult = function(req,res)
{
    retriveUserInfoDetails();
  var allStudents = userInfoDetails.Details,
      sub = req.body.name,
      requiredStudent = allStudents.filter(function(obj){
                   
                   return (obj.mail == req.body.Email)
                   
               });
               
        requiredStudent[0].Result[sub] = req.body.score;
         console.log(userInfoDetails);       fs.writeFileSync('./data/userInfo.json',JSON.stringify(userInfoDetails));
      

}


exports.getStudentResult = function(req,res)
{
    retriveUserInfoDetails();
   res.header("Access-Control-Allow-Origin", "*");
    console.log(userInfoDetails);
   var allStudents = userInfoDetails.Details;
    res.send(allStudents);

}












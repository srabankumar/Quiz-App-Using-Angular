app.controller("pResultController",['$scope','dataFactory','servicefactory','$timeout','mySubjects',function($scope,dataFactory,servicefactory,$timeout,mySubjects)
{
	
	
	$scope.ArrTemp = [];
	$scope.results = [];
    $scope.classInfo  = {};
	
	var getProfessorSubjects = function(details)
    {
        var correctprofessorProfile = details.filter(function(obj){
          return (obj.mail == dataFactory.getUserData().mail) ;
        
        }) 
    
      return correctprofessorProfile[0].subject;
    }
	
	//console.log(mySubjects);
	var subjects = 	getProfessorSubjects(mySubjects.Details);
    console.log(subjects);
		for(obj in subjects)
	{
		//console.log(subjects[obj]);
		$scope.ArrTemp.push(subjects[obj]);
		
		
	};
		
	//console.log($scope.ArrTemp[0]);
	
	//$timeout(function(){objRender();},2000);
	
	
	//console.log($scope.ArrTemp);
	//$('#example1').DataTable();
	
	$scope.viewResult = function()
	{
		//console.log(this.x[0]);
        $scope.resultFlag = true;
		var tempData = this.x;
            $scope.classInfo.sub = tempData[1];
		    $scope.classInfo.clas = tempData[0];
            $scope.results = [];
          var  myClassResult = servicefactory.getClassResults();
            
		myClassResult.then(function(response)
                           {
          var studentInfo = response.data;
		
		var myClassStudents = studentInfo.filter(function(obj){
            if(obj.Result)
            {
                return(tempData[0] == obj.Class);
            
            }
     
			
			
			
		});
           myClassStudents.forEach(function(student)
                                {
           var studentObj = {};
            studentObj.name = student.Name;
            studentObj.marks = student.Result[$scope.sub];
            
            $scope.results.push(studentObj);
            console.log($scope.results);
        
        });
		$('#example2').DataTable();
		//console.log($scope.results);
        
        });
        
		//var studentInfo = dataFactory.getStudentInfo();
		
		/*$scope.results = studentInfo.filter(function(obj){
			
			return((tempData[0] == obj.clas) && (tempData[1] == obj.exam));
			
			
		})*/
		//$('#example2').DataTable();
		//console.log($scope.results);
		
		
		
		
		
		
	};
    
    
    
    var addQuestionToClass = function()
    {
     var tempQstnObj = $scope.$$childHead.$$nextSibling.Question;
        var subjectMap  = {
            "Math":"maths",
            "Science":"science",
            "Computer_science":"cse"
            
        };
        var classMap  = {
            "7":"seven",
            "8":"eight",
            "9":"nine",
            "10":"ten"
        };
        var myQuestionObj = {
        "questions":tempQstnObj.questions,
        "options":[tempQstnObj.firstOption,tempQstnObj.secondOption,tempQstnObj.thirdOption,tempQstnObj.fourthOption],
        "ans":tempQstnObj.ans
            
            
        };
        
       var questionDetails  = {
           "subject" :subjectMap[$scope.classInfo.sub],
           "class": classMap[$scope.classInfo.clas],
           "question" :myQuestionObj
           
           
       };
       //console.log(questionDetails);
        servicefactory.addQuestion(questionDetails);
    }
    
    
    
    $scope.addQuestions = function()
    {
       $scope.resultFlag = false;
       var Details = this.x ;
            $scope.classInfo.sub = Details[1];
		    $scope.classInfo.clas = Details[0];
            $scope.results = [];
    
    
    }
     $scope.addmyquestion =function(isValid)
     {
         if(isValid)
             {
                 addQuestionToClass();
             }
         
     }
    
	
	
	
	
	
	
	
}]);



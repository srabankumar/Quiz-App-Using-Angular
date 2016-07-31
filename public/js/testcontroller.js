app.controller('testController',['$scope','servicefactory','$rootScope','dataFactory','$localStorage',function($scope,servicefactory,$rootScope,dataFactory,$localStorage){
	var exam={"question":null};
		var map = {"exam":null,"length":null};
		var no={"qno":0,"skipedNo" :0};
		var q_no = {"no":[]};
	  var score = {"netscore":0};
	  var dump = {"temp":0};
	  var skip_arr = [];
	  var skip_qstn_flag = 0;
	  
	 
	  //arguments.callee.count = {"maths":0,"Science":0,"Cse":0};
	
	//var result_controller = $controller('resultController');
	
	$scope.givetest=function(sub){                   //trigger at the time of click event of test button
		//console.log("hiii");
		$rootScope.btnflag = 0;
        
var studentClass = dataFactory.getStudentDetails().Class,
classMap = 
            {
            "7" :"seven",
            "8":"eight",
            "9":"nine",
            "10":"ten"    
            
            },
studentInfo = {"class":classMap[studentClass],
               "subject":sub};
        
//console.log(studentInfo);        
  //console.log(classMap[dataFactory.getStudentDetails().Class]);    
        
        
		var obj = servicefactory.getquestions();
		obj.then(function(response){
            var questionBank = response.data.questions;
        //console.log(questionBank[studentInfo.class]);
          var classQuestions = questionBank.filter(function(obj)
                                                   {
          
          return Object.keys(obj)[0] == studentInfo.class ;
          
          
          })  ;
            //console.log(classQuestions);
            
			//console.log("1");
            //console.log(response.data);
			exam.question=classQuestions[0][studentInfo.class];
            console.log(exam.question);
			questions(sub);
			
			
			
			//console.log(question.maths);
		
	
		});
	};
	
	
	/*var counter = function(sub)
	{
		//counter.count = {};
		counter.sub  = ++counter.sub || 1;
		return counter.sub;
		
		
	}*/
	
	
		var questions = function(sub) {
			
			
			if(sub=="maths"){
				// arguments.callee.count["maths"]+=1;
				//for(var i=0;i<question.maths.length;i++){
					//console.log("hjhv");
					//var message = "";
					//console.log("2");
					
					no.qno = 0;
					map.exam = "maths";
					//counter(map.exam);
					map.length = exam.question[map.exam].length;
					uniqueNoGenerator();
					//console.log(q_no.no);
					getquestion();
					
					 
					//$scope.message = question.maths[i].questions;
					
				//}
			}
			if(sub =="science")
			{
				//count.Science+=1;
				//console.log("1");
				no.qno = 0;
				map.exam = "science";
				//counter(map.exam);
				map.length = exam.question[map.exam].length;
				uniqueNoGenerator();
				//console.log(q_no.no);
			    getquestion();
					
			}
			if(sub =="cse"){
				//count.Cse+=1;
				no.qno = 0;
				map.exam = "cse";
				//counter(map.exam);
				map.length = exam.question[map.exam].length;
				uniqueNoGenerator();
				//console.log(q_no.no);
			    getquestion();
			}
				
			
		};
		
		var DisplayQuestions = function()
		{
				var examName = map.exam;
					if(skip_qstn_flag == 1)
					{
						//console.log("dfsdf");
						
						if(no.skipedNo < skip_arr.length)
						{
							
							dump.temp = skip_arr[no.skipedNo];
							console.log(dump.temp);
							//DisplayQuestions();
							
							$rootScope.btnflag = 0;
							$scope.skipFlag = null;	
						}
						else
						{
							/*
							if(skip_arr.length == 0)
														{
															$scope.resultMessage();
															return false;
															
														}
														else
														{
															//no.skipedNo = 0;
															//dump.temp = skip_arr[no.skipedNo];
															
															
														}*/
							$scope.skipmessage();
							return false;
							
						}
				
			}
					
					console.log(dump.temp);
					//console.log(i);
					//console.log(examName);
					//console.log(exam.question[examName][2]);
					var message  ='<div>'+exam.question[examName][dump.temp].questions+
							'</div><div class=\"radio\"><label><input type=\"radio\" class=\"radio1\" id="r1" name=\"optradio\" value=\"1\">'+exam.question[examName][dump.temp].options[0]+
							'</div><div class=\"radio\"><label><input type=\"radio\" class=\"radio1\" name=\"optradio\" value=\"2\">'+exam.question[examName][dump.temp].options[1]+
							'</div><div class=\"radio\"><label><input type=\"radio\" class=\"radio1\" name=\"optradio\" value=\"3\">'+exam.question[examName][dump.temp].options[2]+
							'</div><div class=\"radio\"><label><input type=\"radio\" class=\"radio1\" name=\"optradio\" value=\"4\">'+exam.question[examName][dump.temp].options[3]+
							'</div>';
							//console.log(message);
							//console.log(exam.question[examName][temp].ans);
							
							//compareAns(i,examName,temp);
							//var i = $('input[name="optradio"]:checked').val();
							
							
            					
            			//console.log(message);
   							
   							
							$( ".modal-body" ).empty();
							$(".modal-body").append(message);
							if(skip_qstn_flag == 1)
							{
								no.skipedNo+=1;
							}
							else{
								 no.qno+=1;
							}
							
							 $('#disabled').prop('disabled', true);
							
							
							$("input[type='radio']").change(function(){
															 console.log("value");
															 $('#disabled').prop('disabled', false);
														});
														
			
			
			
		};
		
		
		var getquestion = function()
		{
			//console.log("3");
			//console.log(no.qno);
			//console.log($rootScope.btnflag);
			$scope.question_no = no.qno+1;
			
			if(no.qno<5)
			{
				   
				    //console.log(q_no.no);
					dump.temp = q_no.no[no.qno];
					//console.log(dump.temp);
					//console.log(temp);
					DisplayQuestions();
							
			}
			else
			{
				//no.qno = 0;
				
				
				
				
				//var i = counter(map.exam);
				//console.log(i);
				//dataFactory.setCount(i);
				//result_controller.display(count[map.exam])
				dataFactory.setExamName(map.exam);
				$scope.skipmessage();
				
				
				
			}
		};
		$scope.skipmessage = function()
		{
			
			if(skip_arr.length !=0)
				{
					
					        $scope.question_no = " ";
							var message = "<p>Do You want to submit</p>" ;
							$scope.skipFlag = 1;
						    $rootScope.btnflag = null;
							$( ".modal-body" ).empty();
							$(".modal-body").append(message);
				}
				else
					{
						    
							$scope.resultMessage();
					}
			
			
		};
		
		
		
		
		
		$scope.resultMessage = function()
		{
			//dataFactory.setScore( score.netscore,map.exam);
            var examMap = {
            "maths":"Math",
            "science":"Science",
            "cse":"Computer_science"
            }
            
            var examDetails = {
                "score":score.netscore,
                "name":examMap[map.exam],
                "Email":dataFactory.getUserData().mail
            }
            servicefactory.setResult(examDetails);
			$rootScope.btnflag = 1;
		    $scope.question_no = " ";
		    $scope.skipFlag = 0;
			var message = "<p>Exam Completed</p><p> Your score is" + score.netscore + "</p>" ;
							$( ".modal-body" ).empty();
							$(".modal-body").append(message);
			
			
		};
		 
		 
		 var uniqueNoGenerator = function()
		 {
		 	
		 	var arr = q_no.no;
		 	//console.log(arr);
		 	for(var i = 0;i<map.length;i++)
		 	{
		 	var temp = Math.floor(Math.random()*5);
		 	//console.log(temp);
		 	//arr.push(temp);
		 	if(arr.length == 0)
		 	{
		 		arr.push(temp);
		 	}
		 	else
		 	{
		 		for(var i=0; i<arr.length ;i++)
		 		{
		 			if(arr[i] == temp)
		 			{
		 				break;
		 			}
		 		}
		 		if(i==arr.length)
		 		{
		 			arr.push(temp);
		 			//console.log(temp);
		 		}
		 		
		 		
		 		
		 	}
		 	
		 	//console.log(arr[arr.length-1]);
		 	
		 	
		 }
		 };
		 
		 /* Skip quesion functionality */
		
		$scope.skip = function()
		{
			if(skip_qstn_flag == 1)
			{
					var skipquestion = skip_arr.filter(function(no){
						return (no == dump.temp);
					});
					if(skipquestion.length == 0)
					{
						skip_arr.push(dump.temp);
						getquestion();
					}	
					else
					{
						$scope.SkippedQuestion();
						return false;
					}
			}
			else
			{
				
				var examName = map.exam;
			//console.log(dump.temp);
			skip_arr.push(dump.temp);
			getquestion();
				
			}
					
			
			//console.log(exam.question[examName][dump.temp])
			
			
		};
		$scope.SkippedQuestion = function()
		{
			console.log(skip_arr);
			skip_qstn_flag = 1;
			
			console.log(skip_arr.length);
			console.log(no.skipedNo);
			if(skip_arr.length == no.skipedNo)
			{
				no.skipedNo = 0;
				DisplayQuestions();
				
			}
			else
			{
				DisplayQuestions();
				
			}
			/*
			for(var i = 0; i<skip_arr.length;i++)
						{
							console.log("hhjhk");
							dump.temp = skip_arr[i];
							DisplayQuestions();
							
						}*/
			
			//var examName = map.exam;
			//console.log(dump.temp);
			//skip_arr.push(dump.temp);
			//$scope.compareAns();
			//console.log(exam.question[examName][dump.temp])
			
			
		};
		
		
		 
		 
		 
		 
		 
		 $scope.compareAns  = function()
		 {
		 	var i = $('input[name="optradio"]:checked').val();
		 	var examName = map.exam;
		 	//console.log(Selected_ans);
		 	//console.log(examName);
		 	switch (examName)
		 	{
		 		case "maths":
		 				if(no.qno == 1)
		 				{
		 					 score.netscore = 0;
		 				}
		 		       
		 		        //console.log(exam.question[examName][dump.temp].ans);
		 		        //console.log(i);
		 				if(i == exam.question[examName][dump.temp].ans)
		 				{
		 					//console.log("right");
		 					
		 					score.netscore+=20;
		 					//console.log(score.netscore);
		 				}
		 				
		 				if(skip_qstn_flag == 1)
						{
							skip_arr.splice(no.skipedNo-1,1);
							no.skipedNo = 0;
							$scope.SkippedQuestion();
						}
						else
						{
							getquestion();
						}
		 				break;
		 		case "science":
		 		       //console.log(no.qno);
		 				if(no.qno == 1)
		 				{
		 					 score.netscore = 0;
		 				}
		 				if(i == exam.question[examName][dump.temp].ans)
		 				{
		 					score.netscore+=20;
		 				}
		 				getquestion();
		 				break;
		 		case "cse":
		 		       //console.log(no.qno);
		 		        if(no.qno == 1)
		 				{
		 					 score.netscore = 0;
		 				}
		 				if(i == exam.question[examName][dump.temp].ans)
		 				{
		 					score.netscore+=20;
		 				}
		 				getquestion();
		 				break;
		 				
		 	}
		 	
		 	
		 	
		 };
		
		
		
		
		//console.log(sub);
		
	
		
		
	
}]);

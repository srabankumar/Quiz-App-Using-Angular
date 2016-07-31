app.controller('resultController',['$scope','dataFactory','servicefactory','myResults', function($scope,dataFactory,servicefactory,myResults)
{
	
	$scope.flag.user = false;
	$scope.name = dataFactory.getUserData().name;
	//var userinfo = servicefactory.userinfo ();
	$scope.userData = {"maths":[],"Science":[],"Cse":[]};
	//$scope.userData = {};
	//$scope.total_marks = {"maths":0,"Science":0,"Cse":0};
	//var count = {"math":0,"science":0,"cse":0}
	function display()
	{
		
		/*var user1 = useradata.filter(function(obj)
		{
			return(obj.Name == $scope.name)
		})*/ 
		//if(user1[0])
		//{
			var ExamName = dataFactory.getExamName();
			var temp = dataFactory.getScore(ExamName);
			console.log(temp);
			var temp2 = dataFactory.getObject();
			
			//console.log(dataFactory.getScore('maths')[temp-1]);
			//$scope.userData.maths[temp-1] = (dataFactory.getScore('maths')[temp-1]) || "Not done yet";
			/*if(temp.length == 0)
			{
				$scope.userData.maths[i]
			}*/
			for(j in temp2)
				{
					for(var c=0;c<2;c++)
					{
						//console.log($scope.userData[j]);
						$scope.userData[j][c] = temp2[j][c] || "Not done yet";
						if(isNaN($scope.userData[j][c]))
							{
							$scope.total_marks[j] = $scope.total_marks[j];
							}
						else
							{
								$scope.total_marks[j] = $scope.total_marks[j] + $scope.userData[j][c];
								
							}
						
						
					}
					
					
				}
				
			for(var i = 0; i<temp.length;i++)
			{
				//console.log(ExamName[i]);
				//console.log($scope.userData.ExamName[0])
				//console.log(temp);
				//console.log(ExamName);
				//console.log($scope.userData[ExamName])
				$scope.userData[ExamName][i] = temp[i] || "Not done yet";
				
				
			}
			
			//$scope.userData.science= (dataFactory.getScore('Science')[0]) || "Not done yet";
			//$scope.userData.computer_science= (dataFactory.getScore('Cse')[0]) || "Not done yet";
           
    		
    		

			
		//}
		
		
				var student = {};
				student.name = dataFactory.getdata();
				student.exam = ExamName;
				student.clas = dataFactory.getClass();
				student.marks = $scope.total_marks[ExamName];	
				//console.log(student);
				dataFactory.setStudentInfo(student);
		
		
		
		$('#example1').DataTable();
		
		
	};
	/*userinfo.then(function(response)
	{ 
		var useraData = response.data.Details;
		display();
		
	},function(error)
	{
		
		console.log("No Data Found")
	}); */
var displayResults  = function(resultArray)
{
    var requiredStudent = resultArray.filter(function(obj){
        return obj.mail == dataFactory.getUserData().mail;
    });
    
     $scope.total_marks = {};
    if(requiredStudent[0].Result["Math"])
        {
             $scope.total_marks["maths"] = requiredStudent[0].Result["Math"]  ;
            
        }
    else
    {
        $scope.total_marks["maths"] = "Not done yet"
    }
       if(requiredStudent[0].Result["Science"])
        {
             $scope.total_marks["Science"] = requiredStudent[0].Result["Science"]  ;
            
        }
    else
    {
        $scope.total_marks["Science"] = "Not done yet"
    }
       if(requiredStudent[0].Result["Computer_science"])
        {
             $scope.total_marks["Cse"] = requiredStudent[0].Result["Computer_science"]  ;
            
        }
    else
    {
        $scope.total_marks["Cse"] = "Not done yet"
    }
}

  displayResults(myResults);




    //display();
	
}]);






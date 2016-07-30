app.controller("signupController",["$scope","dataFactory","$rootScope",'servicefactory','$route',function($scope,dataFactory,$rootScope,servicefactory,$route){
	//$scope.usr.pro = "student";
	$scope.profession = function()
	{
		var temp = $scope.usr.pro;
		if(temp == "Student")
		{
			$rootScope.student_flag =1;
		}
		else
		{
			$rootScope.student_flag =0;
		}
	}
		
  
        
   var setvalue = function()
    {
    	$rootScope.btnflag = 1;
	    var user = {};
	    user.first = $scope.usr.name;
	    user.profession = $scope.usr.pro;
	    user.cls = $scope.usr.clas;
	    user.email = $scope.usr.email;
	    user.name = $scope.usr.user;
	    user.pass = $scope.usr.pass;
        
	   console.log(user);
	   //dataFactory.setusers(user); 
        
    servicefactory.signupResult(user).then(function(res){
      var message = res.data.message;
     if(message == "OK")
     {
        $scope.message = "Registered Successfully";
         //$route.reload();
       $("#name").val("");
         $("#mail").val("");
         $("#user").val("");
         $("#pass").val("");
         $scope.usr.pro = "professor";
         $rootScope.student_flag =0;
         $scope.usr.clas = 0 ;
         
     }
        else
        {
           $scope.message = message ;
        
        }
    
    
    })
        
	   
	   $scope.buttonmsg = "close";
	   //alert("successful")
	   $('#myModal').modal("show");
	   //dataFactory.getusers();
        
     }
    
     $scope.submitForm = function(isValid) {

		// check to make sure the form is completely valid
		if (isValid) { 
			setvalue();
		}
		else
		{
			return 0;
		}

	};
    
	
	
}])

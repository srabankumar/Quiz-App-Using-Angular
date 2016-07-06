app.controller("signupController",["$scope","dataFactory","$rootScope",function($scope,dataFactory,$rootScope){
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
	   dataFactory.setusers(user);
	   $scope.message = "Registered Successfully";
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

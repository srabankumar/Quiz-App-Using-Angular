app.controller('loginController', ['$scope', '$location', '$http', 'servicefactory','dataFactory',
function($scope, $location, $http, servicefactory,dataFactory) {
	$scope.details = {};
	var getvalue = function() {

		var loginData = {

			"username" : $scope.details.email,
			"pass" : $scope.details.password
		}

		function check(myData) {
			
			var user = myData.filter(function(obj) {

				return (obj.name === loginData.username && obj.pass === loginData.pass)
			})
			if(user[0]) {
				
				dataFactory.setdata(user[0]);
				var profsn = dataFactory.getProfession();
				console.log(profsn);
				if(profsn == "professor")
				{
					$location.path('/pdashboard');
				}
				else
				{
					$location.path('/dashboard');
				}
			}
			else
			{
				$scope.question_no = "Student Portal"
				$scope.btnflag = 1;
				$scope.message = "Invalid credentials"
				$('#myModal').modal('show');
			}

		}

		var data1 = servicefactory.login();
		//console.log(servicefactory.login());

		
			//console.log(response.data.Login);
	    check(data1)
			//console.log(data1);

	}
	//serviceFactory.callPostService('login',data,loginSuccess);

	$scope.goToRegister = function() {
		$location.path('register');
	};
	
	
	 $scope.submitForm = function(isValid) {

		// check to make sure the form is completely valid
		if (isValid) { 
			getvalue();
		}
		else
		{
			return 0;
		}

	};
    
}]);

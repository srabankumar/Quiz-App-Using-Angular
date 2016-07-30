app.controller('dashboardController',['$scope','dataFactory','servicefactory', function($scope,dataFactory,servicefactory,userData)
{
	
	$scope.flag.user = false;
    console.log(dataFactory.getUserData());
	$scope.mail = dataFactory.getUserData().mail;
	/*$scope.occupation = dataFactory.getProfession();
	$scope.clss = dataFactory.getClass();*/

    var userinfo = servicefactory.userinfo ();
	$scope.userData = {};
	function display(useradata)
	{
		var user1 = useradata.filter(function(obj)
		{
			return(obj.mail == $scope.mail)
		}) 
		if(user1[0])
		{
			dataFactory.setStudentDetails(user1[0]);
			$scope.userData.first = user1[0].Name;
			$scope.userData.class1= user1[0].Class;
			$scope.userData.mail= user1[0].mail;

			//$('#example').DataTable();
		}
		$('#example1').DataTable();
		
	}
	userinfo.then(function(response)
	{ 
        console.log(response.data.Details);
		var useraData = response.data.Details;
        console.log(typeof(useraData));
		display(useraData);
	},function(error)
	{
		
		console.log("No Data Found")
	})
	
	
}]);






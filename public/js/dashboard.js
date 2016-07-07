app.controller('dashboardController',['$scope','dataFactory','servicefactory', function($scope,dataFactory,servicefactory,userData)
{
	
	$scope.flag.user = false;
    console.log(dataFactory.getUserData());
	$scope.id = dataFactory.getUserData().id;
	/*$scope.occupation = dataFactory.getProfession();
	$scope.clss = dataFactory.getClass();*/

    var userinfo = servicefactory.userinfo ();
	$scope.userData = {};
	function display(useradata)
	{
		var user1 = useradata.filter(function(obj)
		{
			return(obj.ID == $scope.id)
		}) 
		if(user1[0])
		{
			
			$scope.userData.first = user1[0].Name;
			$scope.userData.class1= user1[0].Class;
			$scope.userData.id= user1[0].ID;

			//$('#example').DataTable();
		}
		$('#example1').DataTable();
		
	}
	userinfo.then(function(response)
	{ 
		var useraData = response.data.Details;
		display(useraData);
	},function(error)
	{
		
		console.log("No Data Found")
	})
	
	
}]);






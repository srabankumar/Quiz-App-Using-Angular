app.controller("pResultController",['$scope','dataFactory','servicefactory','$timeout',function($scope,dataFactory,servicefactory,$timeout)
{
	
	
	$scope.ArrTemp = [];
	$scope.results = [];
	
	
	
	
	var subjects = 	dataFactory.getSub();
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
		var tempData = this.x;
		$scope.sub = tempData[1];
		$scope.clas = tempData[0];
		var studentInfo = dataFactory.getStudentInfo();
		
		$scope.results = studentInfo.filter(function(obj){
			
			return((tempData[0] == obj.clas) && (tempData[1] == obj.exam));
			
			
		})
		//$('#example2').DataTable();
		console.log($scope.results);
		
		
		
		
		
		
	};
	
	
	
	
	
	
	
}]);



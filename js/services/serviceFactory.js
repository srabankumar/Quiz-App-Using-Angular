app.factory("servicefactory",["$http","dataFactory",function($http,dataFactory){
	
	var services = {};
	services.login = function()
	{
		
		var obj = {"data":null}
		//console.log(dataFactory.getusers());
		var a1 = dataFactory.getusers();
	    return a1;
		
	};
	services.userinfo = function()
	{
		
		
		//console.log("excuted")
		return $http.get("./mockData/userInfo.json");
		
	};
	services.getquestions = function()
	{
		return $http.get("./mockData/questions.json");
		
	}
	
	
	
	
	
	return services
	
}])

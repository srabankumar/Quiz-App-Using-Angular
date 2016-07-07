app.factory("servicefactory",["$http","dataFactory",function($http,dataFactory){
	
	var services = {};
    var serviceURL = "http://localhost:3000" ;
	services.login = function()
	{
		
		
        var obj = {"data":null}
		//console.log(dataFactory.getusers());
		//var a1 = dataFactory.getusers();
       return $http.get(serviceURL + "/users");
        //console.log(a1);
	    
		
	};
	services.userinfo = function()
	{
		
		
		//console.log("excuted")
		return $http.get(serviceURL+"/userInfo");
		
	};
	services.getquestions = function()
	{
		return $http.get(serviceURL+"/questions");
		
	}
	
	
	
	
	
	return services
	
}])

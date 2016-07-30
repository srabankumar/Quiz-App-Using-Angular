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
    
    	services.setSubject = function(detail)
	{
		
		
		//console.log("excuted")
        var localURL = serviceURL + "/addClasses" ;
		return $http({method:'POST',
                     url:localURL,
                     data:detail});
		
	};
    
	services.getquestions = function()
	{
		return $http.get(serviceURL+"/questions");
		
	}
    
    	services.signupResult = function(user)
	{
       var  MyUrl = serviceURL + '/signup' ;
		return  $http({
         method: 'POST',
         url: MyUrl,
          data: user
     })
		
	}
	
	services.getMySubjects = function()
    {
       return $http.get(serviceURL + '/getmySubjects');
    
    }
    
    
    
   /*	services.getClassResults = function(classInfo)
	{
        console.log(classInfo);
       var  MyUrl = serviceURL + '/getmyResults' ;
		return  $http({
         method: 'POST',
         url: MyUrl,
          data: classInfo
     })
		
	}*/
	
	services.getClassResults = function(clasInfo)
    {
     return $http.get(serviceURL + '/getmyResults');
    
    
    } 
	
	services.addQuestion = function(question)
    {
        var addURL = serviceURL + '/addquestion' ;
        return $http({
            method:'POST',
            url: addURL,
            data:question
        });
    }
	
	
	return services
	
}])

var app = angular.module("MyApp",['ngRoute','ngAnimate','ngStorage','datatables']);

app.config(function($routeProvider){
	
	$routeProvider.when("/",
	{
		templateUrl : "templates/login.html",
		controller :"loginController",
		
			
	}) .when("/about",{
		templateUrl : "templates/about.html",
		controller :"aboutController",
		
	}) .when("/contact",{
		templateUrl : "templates/contact.html",
		controller :"contactController",
		
	}) .when("/signup",{
		templateUrl : "templates/signup.html",
		controller :"signupController",
		
	}) .when("/login",{
		templateUrl : "templates/login.html",
		controller :"loginController",
		
	}) .when("/dashboard",{
		templateUrl : "templates/dashboard.html",
		controller :"dashboardController",
		/*resolve :{
			userData : function($localStorage,dataFactory){
				console.log("working");
				var data = {};
				 data.name = dataFactory.getdata();
				 data.clas = dataFactory.getClass();
				 data.profession = dataFactory.getProfession();
				 
				 return data;
				
			}
		}*/
		
		
	}) .when("/profile",{
		templateUrl : "templates/dashboard.html",
		controller :"dashboardController",
		
		
	}).when("/pdashboard",{
		templateUrl : "templates/pdashboard.html",
		controller :"pdashboardController",
		
		
	}) .when("/pprofile",{
		templateUrl : "templates/pdashboard.html",
		controller :"pdashboardController",
		
	}) .when("/test",{
		templateUrl : "templates/test.html",
		controller :"testController",
		
		
	}) .when("/result",{
		templateUrl : "templates/result.html",
		controller :"resultController",
        resolve:{
            "myResults":function(servicefactory)
            {
     var resultCall = servicefactory.getMyResult();
                return resultCall.then(function(res){
                    //console.log(res.data);
                    return res.data;
                });
                
            }
        }
		
		
	}) .when("/presult",{
		templateUrl :"templates/presult.html",
		controller :"pResultController",
        resolve:{
        "mySubjects":function(servicefactory)
            {
            
           var subCall =  servicefactory.getMySubjects();
            return subCall.then(function(response)                  {
                   return response.data;
                });
               
            }
            
            
            }
        
        
        
		
		
	}).when("/logout",{
		templateUrl : "templates/login.html",
		controller :"loginController",
		
	})
	
	 .otherwise({
		redirectTo :"/login"
	})
	
	
	
});



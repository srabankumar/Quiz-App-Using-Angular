app.controller('pdashboardController',['$scope','dataFactory','servicefactory', '$compile',function($scope,dataFactory,servicefactory,$compile)
{
	
	$scope.flag.user = false;
    
	$scope.name = dataFactory.getUserData().name;
	$scope.occupation = dataFactory.getUserData().profession;
	
	$scope.add = function()
	{
        $scope.btnflag = 2;
	    var message  ='<div>'+
	    
	    						'<table class="" cellspacing="4" width="100%" id="example1">'+
								'<thead>'+
									'<tr>'+
			      
									      '<th class="head">Class</th>'+
									      '<th class="head">Subject</th>'  +
									      
   		 							'</tr></thead>'+
											
       	 							'<tbody>'+
           
      									'<tr>'+
                							'<td><select class="form-control" ng-model="clas1"><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select></td>'+
                							'<td><select class="form-control" ng-model="sub1"><option value="Maths">Math</option><option value="Science">Science</option><option value="Computer_science">Computer Science</option></select></td>'+
											
										'</tr>'	+
										'<tr>'+
                							'<td><select class="form-control" ng-model="clas2"><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select></td>'+
                							'<td><select class="form-control" ng-model="sub2"><option value="Math">Math</option><option value="Science">Science</option><option value="Computer_science">Computer Science</option></select></td>'+
											
										'</tr>'	+
										'<tr>'+
                							'<td><select class="form-control" ng-model="clas3"><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select></td>'+
                							'<td><select class="form-control" ng-model="sub3"><option value="Maths">Math</option><option value="Science">Science</option><option value="Computer_science">Computer Science</option></select></td>'+
											
										'</tr>'	+
								'</tbody></table>'+
								'<div class="text-center"><button type="submit" class="btn btn-success btn-sm " ng-click="add_values()"  data-target="#myModal">ADD</button></div>'
               
      
      	'</div>';	
      	var template = $compile(message)($scope);
      	$( ".modal-body" ).empty();
		$(".modal-body").append(template);
		$('#example1').DataTable();
		
		
   
	    
	    
	    
							
					
		
		
   };
    $scope.add_values = function()
    {
    	//$scope.btnflag = 1;
    	
    	
    	var mail = dataFactory.getUserData().mail;
    	var subjects = {},
            details = {};
       
    	subjects.first = [$scope.clas1,$scope.sub1];
    	subjects.second = [$scope.clas2,$scope.sub2];
    	subjects.third = [$scope.clas3,$scope.sub3];
        //console.log(subjects);
         details.Email = mail;
         details.sub = subjects;
        var setSubjects = servicefactory.setSubject(details);
        setSubjects.then(function(res){
            var message = res.data.message;
          // console.log(res);
           dataFactory.setSub(subjects);
            $( ".modal-body" ).empty();
    	    $(".modal-body").append(message);
    	
        })
            	
    };
	
	
}]);






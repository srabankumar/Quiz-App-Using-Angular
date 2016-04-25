app.controller('pdashboardController',['$scope','dataFactory','servicefactory', '$compile',function($scope,dataFactory,servicefactory,$compile)
{
	
	$scope.flag.user = false;
	$scope.name = dataFactory.getdata();
	$scope.occupation = dataFactory.getProfession();
	
	$scope.add = function()
	{
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
                							'<td><select class="form-control" ng-model="sub1"><option value="maths">Math</option><option value="Science">Science</option><option value="Cse">Computer Science</option></select></td>'+
											
										'</tr>'	+
										'<tr>'+
                							'<td><select class="form-control" ng-model="clas2"><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select></td>'+
                							'<td><select class="form-control" ng-model="sub2"><option value="maths">Math</option><option value="Science">Science</option><option value="Cse">Computer Science</option></select></td>'+
											
										'</tr>'	+
										'<tr>'+
                							'<td><select class="form-control" ng-model="clas3"><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select></td>'+
                							'<td><select class="form-control" ng-model="sub3"><option value="maths">Math</option><option value="Science">Science</option><option value="Cse">Computer Science</option></select></td>'+
											
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
    	var message = "Added Successfully";
    	$( ".modal-body" ).empty();
    	$(".modal-body").append(message);
    	
    	
    	var subjects = {};
    	subjects.first = [$scope.clas1,$scope.sub1];
    	subjects.second = [$scope.clas2,$scope.sub2];
    	subjects.third = [$scope.clas3,$scope.sub3];
        //console.log(subjects);
        dataFactory.setSub(subjects);    	
    };
	
	
}]);






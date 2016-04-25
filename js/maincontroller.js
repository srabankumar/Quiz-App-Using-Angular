app.controller("MyController",['$scope','$location','$rootScope',function($scope,$location,$rootScope){
	$scope.flag = {};
	$scope.flag.user = true;
	$rootScope.logout_flag = false;
	$scope.goToPage = function(url,event)
	{
		//alert("hi");
		if(url == 'logout')
		{
			$rootScope.logout_flag = true;
		}
		$location.path(url);
		//$('#example').DataTable();
		angular.element(event.currentTarget).parent().children().removeClass('active');
		angular.element(event.currentTarget).parent().siblings().children().removeClass('active');
		angular.element(event.currentTarget).addClass('active');
	};
	$rootScope.$on('$routeChangeStart', function(event, next, current) {
		if(($rootScope.logout_flag == true) && (next.templateUrl == "templates/login.html"))
		{
			$location.path('/login');
		}
});
}]);

app.directive('datatableSetup', ['$timeout',
  function($timeout) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        
        $timeout(function () {
          element.dataTable();
        });
      }
    };
  }
]);

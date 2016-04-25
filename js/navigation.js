app.directive('navTemplate',[function(){
	return {
		restrict: 'E',
		templateUrl:'templates/navigation.html',
		scope:true,
		replace:true,
		controller:function($scope){
			
		}
	};
}])

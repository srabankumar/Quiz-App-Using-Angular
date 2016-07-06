app.directive('modalTemplate',[function(){
	return {
		restrict: 'E',
		templateUrl:'templates/modal.html',
		scope:true,
		replace:true,
		controller:function($scope){
			
		}
	};
}]);

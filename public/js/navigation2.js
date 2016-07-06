/**
 * @author adg
 */
app.directive('loginTemplate',[function(){
	return {
		restrict: 'E',
		templateUrl:'templates/navigation2.html',
		scope:true,
		replace:true,
		controller:function($scope){
			
		}
	};
}])

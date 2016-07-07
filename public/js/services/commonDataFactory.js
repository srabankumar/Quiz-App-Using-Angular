/**
 * @author adg
 */
app.factory("dataFactory",function( $localStorage,$sessionStorage){
	
	
	if($localStorage.users && $localStorage.users.length<=0){$localStorage.users = [];};
	//$localStorage.users = [];
	if($localStorage.studentInfo && $localStorage.studentInfo.length<=0){$localStorage.studentInfo = [];};
	//$localStorage.studentInfo = [];
	//$localStorage.users = [];
	//$sessionStorage.current_user = {}
    var commondata = {'name':null,'occupation':null,'clss':0};
	$sessionStorage.netScore = {'maths':[],'Science':[],'Cse':[]};
	var subject = null;
	var examName = null,
        myUserData = null;
	//var counter = {"count":0}
    
    commondata.setUserData = function(data)
    {
        myUserData = data;
    }
    commondata.getUserData = function()
    {
        return myUserData;
    }
    
   /* commondata.getdata = function(){
    	return $sessionStorage.name;
    };
    commondata.getProfession = function()
    {
    	return $sessionStorage.occupation;
    };
    commondata.getClass = function()
    {
    	return $sessionStorage.clss;	
    };
	commondata.setdata=function(obj1){
		$sessionStorage.name = obj1.first;
		$sessionStorage.occupation = obj1.profession;
		$sessionStorage.clss = obj1.cls;
		
	};
	commondata.setusers = function(obj)
	{
		$localStorage.users.push(obj);
	};
	commondata.getusers = function()
	{
		//console.log($localStorage.users)
		return $localStorage.users;
	};*/
	commondata.getScore = function(sub)
	{
		//console.log(netScore[sub]);
		return $sessionStorage.netScore[sub];
	};
	commondata.setScore = function(marks,sub)
	{
		$sessionStorage.netScore[sub].push(marks);
		//$sessionStorage.score = netScore[sub];
		//console.log($sessionStorage.score);
	};
	commondata.getExamName = function()
	{
		return examName;
	};
	commondata.setExamName = function(name)
	{
		examName = name;
	};
	commondata.getObject = function()
	{
		return $sessionStorage.netScore;
	};
	commondata.setSub = function(sub)
	{
		subject = sub;
	};
	commondata.getSub = function()
	{
		
		return subject;
	};
	commondata.getStudentInfo = function()
	{
		return $localStorage.studentInfo;
	};
	commondata.setStudentInfo = function(student)
	{
		$localStorage.studentInfo.push(student);
	};
	/*commondata.setCount = function(i)
	{
		counter.count = i;
	}
	commondata.getCount = function()
	{
		return counter.count;
	}*/
	return commondata;
});

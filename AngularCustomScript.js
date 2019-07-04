
//Creating a controller , pashogus- name of the module , [] - dependency for module
var myapp = angular.module("pashogus",[]);

//Controller creation , 
// 1- $scope - object passed to the controller by angualr framwork automatically
// 2- we will be adding model to the scope object
// 3- scope object will be available in turn in the view
//with binding expression we will retrive value from the scope object of the model
/*
var mycontroller = function ($scope)
{
$scope.message="Angualr JS"
}
*/

/*
//Registering controller
//first param 0- name of the controller
//second param - function name
myapp.controller("mycontol",mycontroller)
*/


// creating a controller and registering to a module in a single step
myapp.controller ("mycontrol", function ($scope)
{
$scope.message="Angualr JS"
}
);

myapp.controller("controller1", function ($scope)
{
	var employee = {
		name:"Shan",
		icon:"Penguins.jpg"
	};
	
	$scope.employee=employee;
}
);


//we can even create a model, create a controller and register a controller in a single step using method chaing in angular
var myapp1 = angular.module ("pashogus1", [])
					.controller("pashogusController", function ($scope)
					{$scope.messagedata = "single Step"});
					

//controller for ng-repeat					
myapp.controller("controller2",function ($scope)
{
	
	//array of JSON object
	var repeatobject =
	[
		{name:"pashogus", gender:"male"}, // suingle JSON object
		{name:"shan", gender:"male"},
		{name:"pranay",gender:"male"}
	]
	
	$scope.employee1=repeatobject;
}
);

//nesting ng-repeat
myapp.controller("controller3",function($scope)
{
var countryObject =
[
{"name": "India","states":[{"name" : "TamilNadu", "District":[{"name":"villupuram"},{"name":"kancheepuram"}]},{"name" :"Kerala",District:[{name:"kottayam"},{name:"thrisur"}]},{"name" :"Andhra"}]},
{name :"USA",states : [{name:"SanFransico"},{name:"chicago"},{name:"Houston"}]}
]

$scope.countries = countryObject;
}
);

//controller for handling events
myapp.controller("controller4",function($scope)
{
	var courses =
	[
	{name:"c", like:"0", dislike:"0"},
	{name:"java", like:"0", dislike:"0"},
	{name:"phython", like:"0", dislike:"0"}	
	]
	
	$scope.cousrselist=courses;
	
}
);	
					
$(document).ready(function(){
	$("button").click(function()
	{
		$(".but").hide();
	});
	
	$("#data").click(function(){
		
		/* $.getJSON('https://api.myjson.com/bins/7cv6f',function(tag){
			$(".ret").html('<table><tr><td>'
			+tag.fruit+'</td></tr><tr><td>'
			+tag.size+'</td></tr><td><tr>'
+tag.color+'</tr></td></table>');
			
		}); */
		
		var Employee = [{
		"firstname":"pashogus",
		"salary":"100000"
	},
	{
		"firstname":"gopi",
		"salary":"1000000"
	}];
	

	var response='';
	response += "First Name :"+Employee[0].firstname; 
	$(".ret").html(response);

	var employeeJSON =JSON.stringify(Employee);
        console.log(employeeJSON);	


     	
	});
	
});
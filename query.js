$(document).ready(function(){
	$("#click").click(function()
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
	
	/*var reponse='';
	response += "First Name :"+Employee[0].firstname; 
	$(".ret").html(response); */


	var employeeJSON =JSON.stringify(Employee);
        console.log(employeeJSON);	

        var parsedJSON =JSON.parse(employeeJSON);
       //.each(var=parsedJSON,callbackfunction(args)=function(incrementer=i,loopvariable=item))
        
        var table='<table id="retid">';
		table+= '<tr><th class="td">'+"FirstName"+'</th>';
        table+= '<th class="td">'+"Salary"+'</th></tr>';
        
        
        $.each(parsedJSON,function(i,item){
table += '<tr><td class="td">'+item.firstname+'</td>';
table += '<td class="td">'+item.salary+'</td></tr>';
        });
//table+= '</table>';
     $("#ret").addClass("retborder td retrive");
	 $("#ret").html(table);
		
      
            		
	});
	

	$(window).load(function(){
		alert("bye!!!!!");
		
	});
	
	
	$("#Reload").error(function(){
		alert("error ocuured");
	});


});
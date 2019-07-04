$(document).ready(function(){
	
		
	$("input[type='button']" ).on("click  mouseover mouseout",function(e){

	if(e.type=="click")
	{
		var value= $(this).attr("value");
		
		if (value == "text value" )
		{
			$("#sec2").addClass("secside2");
			$("#1").addClass("scroller");
			var textul="";
textul+= "<li> Text value of unorder list </li>";
textul+= $("ul").text();
$("#1").append(textul);	
			var id = $(this).attr("id");
			console.log(id);
		}
	
	
	else if (value == "First Child" )
	{
		$("#sec2").addClass("secside2");
			$("#1").addClass("scroller");
		var textul="";
textul+= "<li> Text value ofFirst Child</li>";
textul+= $("ul li").eq(0).text();
$("#1").append(textul);	
			var id = $(this).attr("id");
			console.log(id);
	}
	
	else if (value == "clear" )
	{
		$("#1").empty();
		$("#sec2").removeClass("secside2");
			$("#1").removeClass("scroller");
		
			var id = $(this).attr("id");
			console.log(id);
	}
	
	}
	
	else if(e.type=="mouseover")
	{
		var id = $(this).attr("id");
		if (id == "textValue")
		{
			$("#textValue").addClass("click");
		}
		
		else if (id == "FirstChild")
		{
			$("#FirstChild").addClass("click");
		}
		
		else if (id == "Clear")
		{
			$("#Clear").addClass("click");
		}
		
	}
	
	
	else if (e.type=="mouseout")
	{
		var id = $(this).attr("id");
		if (id == "textValue")
		{
			$("#textValue").removeClass("click");
		}
		
		else if (id == "FirstChild")
		{
			$("#FirstChild").removeClass("click");
		}
		
		else if (id == "Clear")
		{
			$("#Clear").removeClass("click");
		}
	}
	
	
	
	});
	
	

	});
	
	

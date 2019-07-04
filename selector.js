
/*$('.sel').focus(function() {
	$(this).addClass("focus");
});
	
		$('.sel').focusout(function() {
	$(this).removeClass("focus");
}); */


 // same as above two functions 
$(document).ready(function(){

//to add and remove classs	
	
$('.sel').focus(function() {
	$(this).addClass("focus");
}).focusout(function() {
	$(this).removeClass("focus");
});



/*
$('.hoverimage').mouseover(function(){
$('.hovertext').fadeIn(300);
}); */

// if uses class it displays all values

/*
$('img[src="help.jpg"]').mouseover(function(){
var check=	$(this).attr("id");
console.log(check);
var check1= check.replace('image','text');
$('#' +check1).fadeIn(300);
}); */

// since id is same it will take only first one

/*$('img[src="help.jpg"]').mouseover(function(){
	var imgid= $(this).attr("id");
	$("#hovertext").fadeIn(300);
}).mouseout(function(){
$("#hovertext").fadeOut(300);
}); */

//fade in and fadeout

$('img[src="help.jpg"]').mouseover(function(){
	var imgid=$(this).attr("id");
	var imgtxt= imgid.replace('image','text')  
	$('#'+imgtxt).fadeIn(300);
}).mouseout(function(){
var imgid=$(this).attr("id");
	var imgtxt= imgid.replace('image','text')
	$('#'+imgtxt).fadeOut(300);
});

//return function with event object 

$('#clickme').on("click",{first:"hello",last:"worls"},function(event){ //for annaymous function we need to pass event object
	var returnvalue= retrivedata(event);  //passing event objec to retrive data function
	$("#val").html(returnvalue);
});

function retrivedata(event)
{
	var firstname= event.data.first;
	//xalert(firstname);
	return firstname;
}


$('#clickme1').on("click",{first:"hello",last:"worls"},retrivedata1);  // retrivedata1 = f retrivedata1(event) < -- > retrivedata1
function retrivedata1(e) 
{
	var firstname= e.data.first;
	alert(firstname);
	
}


/*$("ul").each(function(){
	console.log($(this).text());
console.log($(this).children());	;
});*/


console.log($("ul").text());
console.log($("ul").children());
console.log($("ul").eq(2));
console.log($("ul li").eq(0).text());

$("ul").has("li")
{
	console.log($("li").eq(2).text());
};


var width =$("#1").width();
	console.log(width);
	
/*	
$("#textValue").on("click mouseover mouseout",function(event){
	$("#sec2").addClass("secside2");
			$("#1").addClass("scroller");
			
	if (event.type == "click")
{
	var textul="";
textul+= "<li> Text value of unorder list </li>";
textul+= $("ul").text();
$("#1").append(textul);	
}
else if (event.type== "mouseover")
{
	$("#textValue").addClass("click");
}

else if (event.type == "mouseout")
{
	$("#textValue").removeClass("click");
}

		
});

$("#FirstChild").on("click mouseover mouseout",function(event){
	$("#sec2").addClass("secside2");
			$("#1").addClass("scroller");
if (event.type == "click")
{
	var FirstChild="";
FirstChild+= "<li> First Child of Unordered List</li>";
FirstChild+= $("ul li").eq(0).text();
$("#1").append(FirstChild);	
}
else if (event.type== "mouseover")
{
	$("#FirstChild").addClass("click");
}

else if (event.type == "mouseout")
{
	$("#FirstChild").removeClass("click");
}

	
});

$("#Clear").on("click mouseover",function(event){
	if(event.type== "click")
	{
	$("#1").empty();
	$("#sec2").removeClass("secside2");
			$("#1").removeClass("scroller");
	}

	else if (event.type == "mouseover")
	{
		$("#clear").addClass("click");
}
	
	
});

*/

//console.log($(this).children());
});
//on and off event 












// it add class while focusing for the first time, whilr focus event ocur for teh second time it remives class
 /*$(".sel").focus(function(){
	$(this).toggleClass("focus");
}); */

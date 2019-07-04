function  MyFunction()
{
document.getElementById("js").innerHTML="Hi Pashogus";
}
function Array()
{

	fruits = ["https://www.w3schools.com/js/js_output.asp", "https://www.w3schools.com/js/js_arrays.asp",
	"https://www.w3schools.com/tags/tag_ul.asp", "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_lists4"];
fLen = fruits.length;
text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
document.getElementById("sript").innerHTML=text;
}
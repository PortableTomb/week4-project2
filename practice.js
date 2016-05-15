//alert("This is working!");

$(document).ready(function(){

//1. When 'Submit' is clicked, add the contents of the textbox below the button in a h3 element.
$("#submitBtn").click(function() {
	var userText = $("input:text").val();
	$("#text").text(userText);
});

$("#submitBtn").click(function() {
    $("input[type='text'].textInput").val("userText");
    $("p #1").append("<h3>userText<h3>");
});

//2. When the checkbox is clicked, reveal the hidden message...
$(".chex").click(function() {
var allCheckboxes=$('[type=checkbox]');
if ($('#check_id').is(":checked")){
	$(".hidden2").toggleClass(chex);
}
});

//3. Add a new cat to the table.
$('#tableId tr:last').after("<tr><td>New Cat</td><td>6</td><td>Content</td></tr>");

//4. Make 'hangry' red and 'content' green
//CSS
var color;
$(".hang").css("background-color", "red");
$(".con").css("background-color", "green");


// 5.When clicked, only display cats weighing 10+ lbs
var rows = $('#tableId tr');

$("#heavy").click(function() {
var showHeavyCat = rows.filter('tr.heavyCat').show();
	rows.not('tr.heavyCat').hide();
});

//6. When clicked, uppercase all cat names
$("#yell").click(function() {
	$(' td:nth-child(1)').css("text-transform","uppercase");
});

//7. Show and hide the table with this button.
 $("#togTable").click(function() {
    $("#tableId").toggle();
});


//8.Disable the input field, the checkbox, and the link to Google.
// .prop() will come in handy for the first one. Then, check out .preventDefault() for the link


});







 




























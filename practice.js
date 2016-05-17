//alert("This is working!");

$(document).ready(function(){

//1. When 'Submit' is clicked, add the contents of the textbox below the button in a h3 element.
$("button.btn-info").click(function() {
	var userText = $('input[type="text"]#text').val();
    // alert(userText); This is working! Yay!
      $("<h3></h3>").insertAfter("button.btn-info").append(userText);
});

//2. When the checkbox is clicked, reveal the hidden message...
$(".chex").click(function() {


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
// Disabled Inout Field
 $("input.no").prop("disabled",true);
// Disabled Checkbox
 $('#chkToBePrevented').click(function(){
    return false;
});
// Disabled Link
$("a.disabled").click(function(e) {
    return false;
});

//9.Select the third option from the dropdown, and append it to the page. Try using .find() here.
  $("#dropdown").change(function() {
		var text= $('#dropdown').find('option:selected').text();
		var value= $("#dropdown option:selected").val();
		// alert(text);
		$("<h3></h3>").insertAfter("p.3").append(text);
});

//Works. Not correct. Appends a new item to the bottom of the list.
// $(".dropdown").append("<option value=\"Wahoo\">New Item</option>");

//10. Alert the user how many items are in the list. Let's iterate over those children again. 
//Try using a counter with this one.

//Counts through the li in #alertList and alerts the number of items
$('#alertList li').each(function (i) {
    $(this).click(function () {
        alert (i+1); 
    });
});

});







 




























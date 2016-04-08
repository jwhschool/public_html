function validation()		//validate input when button pressed
{
	//remove error message if corrected/reset ouput area if errors detected, use . to select by class
	$(".error").html("");
	$("#output").html("");
   
	//validation checks: check each field for valid input, set valid=false and display error message if invalid
	var valid = true;
	var dTest = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
	var nTest = /^[A-Za-z]+$/;  //regex to bar entering nonalphabet characters in name field
	var cTest = /^[0-9]+$/; 		 //same but numbers
	
	if ($("#product").val() === "")
	{
		$("#err1").html ("<p>** Please select a product **</p>"); valid = false;
	}   
	if ($("#quantity").val() < 1)
	{
		$("#err2").html ("<p>** Please enter a digit greater than 0 **</p>"); valid = false;
	}
	if ($("#unit_price").val() < 1)
	{
		$("#err3").html ("<p>** Please enter a digit greater than 0 **</p>"); valid = false;
	}
	if (!cTest.test($("#discount_rate").val()) || $("#discount_rate").val() > 100 || $("#discount_rate").val() < 0)
	{
		$("#err4").html ("<p>** Please enter a digit between 0 and 100 **</p>"); valid = false;
	}
	if (!dTest.test($("#order_date").val())) //|| $("#order_date").val().length !== 10
	{
		$("#err5").html ("<p>** Please enter date as mm/dd/yyyy **</p>"); valid = false;
	}
	if (!nTest.test($("#first_name").val()) || $("#first_name").val().length < 2)
	{
		$("#err6").html ("<p>** Please enter a valid name **</p>"); valid = false;
	}
	if (!nTest.test($("#last_name").val()) || $("#last_name").val().length < 2)
	{
		$("#err7").html ("<p>** Please enter a valid name **</p>"); valid = false;
	}
	if ($("#payment_type").val() === "")
	{
		$("#err8").html ("<p>** Please select a payment method **</p>"); valid = false;
	}
	if (!cTest.test($("#card_number").val()) || $("#card_number").val().length !== 16)
	{
		$("#err9").html ("<p>** Please enter a valid card number **</p>"); valid = false;
	}
	if (!cTest.test($("#security_code").val()) || $("#security_code").val().length !== 3)
	{
		$("#err10").html ("<p>** Please enter a valid security code **</p>"); valid = false;
	}	
	
	//once information is validated, call calculation function
	if (valid) 
	{
		calcTotal();
	}
}
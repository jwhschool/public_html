function init()					//determine whether on login or order page
{
	if($("#login_button").length)
	{
		loginInit();
		window.onunload = function() 	//onunload: when user hits back, function is run again (prevents username remaining/checkbox beig checked)
		{
				loginInit();
		};
	}

	if($("#order_button").length)
	{
		orderInit();
	}
	
	if($("#pop_up").length)
	{
		getData();
	}
}

function loginInit()			//when login button pressed, run login function
{
	//reset fields
	$("#user_name").val("");
	$("#password").val("");
	$('#new_user').attr("checked", false);
	$("#user_name").focus();
	
	$("form").submit(function(event) 
	{
		logIn();
		event.preventDefault();
	}
	);
	
	//bring new user to order page
	$("#new_user").click(function() 
	{
		newUser();
	}
	);		
}

function newUser()			//redirect to order form if new user box clicked
{
	window.location = "product_order.html";
}

function logIn()				//verify usernames/passwords match, redirect or throw error
{
	//setup arrays
	var username = ["user1", "user2", "user3", "user4"];
	var password = ["password1", "password2", "password3", "password4"];
	var amount = ["1.00", "2.00", "3.00", "4.00"];
	
	//read input from login page
	var usernameIn = $("#user_name").val();
	var passwordIn = $("#password").val();
	
	//check that username and password match
	for(i = 0; i < username.length; i++)
	{
		if(username[i] === usernameIn && password[i] === passwordIn)
		{
			$("#name").val (username[i]);
			$("#amount").val (amount[i]);
			window.open("popup.html", "", "width=300, height=300");
			break;
		}
		if(usernameIn === "")
		{
			$("#userErr").html ("Please enter a username. <br />");
			$("#user_name").focus();
			break;
		}
		if(passwordIn === "")
		{
			$("#passErr").html ("Please enter a password. <br />");
			$("#password").focus();
			break;
		}
		else
		{
			$("#userErr").html ("Please enter a valid username and password. <br />");
			$("#user_name").focus();
		}
	}
}

function getData()			//retrieve name/amount data from opening window, display time that updates every second
{
	var name = window.opener.$("#name").val() + ",";
	var amount = "$" + window.opener.$("#amount").val();
	
	$("#user_name").html (name);
	$("#amount_info").html (amount);
	
	timeDate();
	setInterval(function(){timeDate(); }, 1000);
	
	$("#close_button").click(function() 
	{
		close();
	}
	);	
	
	$("#print_button").click(function() 
	{
		print();
	}
	);		
}

function orderInit()			//clear page, handle mouseover/date, run functions when order/reset buttons pressed
{
	//output date/time, clear any input
	timeDate();
	reset();

	//update date/time on mouseover
	$("#current_datetime").mouseover(function() 
	{
		timeDate();
	}
	);

	//datepicker widget for date box
	$(function() 
	{
		$("#order_date").datepicker();
	}
	);

	//comment box: on keyup event, run limitText
	$("#comments").keyup(function() 
	{
		limitText();
	}
	);

	//enable submit button when checkbox is checked, disable when unchecked
	$("#accepted").click(function() 
	{
		$("#order_button").attr("disabled", !this.checked);
	}
	);
	
	//submit button
	$("form").submit(function(event) 
	{
		validation();
		event.preventDefault();
	}
	);

	//reset button verification
	$("#reset_button").click(function() 
	{
		resetVerify();
	}
	);
}

function timeDate()		//craft time/date at top of screen
{
	var date = new Date();
	var dateTime = ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2); //shows up in single digits for whatever reason
	$("#current_datetime").html (dateToday + " " + dateTime);
}

function limitText()			//limit comments character count
{
	var count = $("#comments").val().length;
	$("#word_counter").html (count + "/100 characters entered");
	
	if (count > 100)
	{
		$("#comments").val($("#comments").val().slice(0,100));
	}
}

function calcTotal ()		//calculate total once validated/display output when submitted successfully
{	
	var quantity = $("#quantity").val();
	var unit_price = $("#unit_price").val();
	var discount_rate = $("#discount_rate").val();

	var discount_amount = unit_price * (discount_rate / 100);  //calculate the discount amount to be applied
	var order_total = quantity * (unit_price - discount_amount); // calculate discounted total using discount_amount
	
   $("#dialog").dialog({
		draggable: false,
		resizable: false,
		modal: true,
	});
	
	$("#dialog").html("Thank you for ordering, " + $("#first_name").val() + " " + $("#last_name").val() + "! Your order total is $" + order_total.toFixed(2) + ".");
	
	//alert("Thank you for ordering, " + $("#first_name").val() + " " + $("#last_name").val() + ". Your order total is $" + order_total.toFixed(2) + ".");
}	

function resetVerify()	//verify when reset button pressed
{
	var confirmed = confirm("Are you sure?");
	if (confirmed)
	{
		reset();
	}	
}

function reset()				//reset fields
{
	$(".error").html("");  //error messages
	$("#output").html("");  //output
	$("input[type=text], [type=number], textarea, select").val("");  //inputs
	$("#word_counter").html("0/100 characters entered");  //counter
	$("#order_date").val(dateToday);  //reset to todays date
}

//initalise
var dateToday = $.datepicker.formatDate('mm/dd/yy', new Date());  //global variable for date, used in reset and timeDate, eliminates another date function
window.onload = init;
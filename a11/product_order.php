<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Order Form</title>
	
	<link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">  <!-- w3.css -->
	<link href="styles/style.css" rel="stylesheet" />
	<link href="styles/jquery-ui.css" rel="stylesheet" />  <!-- datepicker -->
	
	<script src="scripts/jquery.min.js"></script>
	<script src="scripts/jquery-ui.min.js"></script>
	<!--
	<script src="scripts/product_order.js"></script>
	<script src="scripts/validation.js"></script>
	-->
</head>

<body>
	<?php include "inc/header.php"; ?>
	<?php include "inc/footer.php"; ?>
 
	<div id="main-content" name="main-content">

		<div id="order_header" name="order_header"class="w3-container w3-teal w3-small">
			<h5>Place an Order</h5>
			<div id="current_datetime" name="current_datetime" class="w3-small"></div>
			<br />
		</div>
				
		<form method="post" action="order_process.php" id="order_form" name="order_form" class="w3-small w3-container w3-card-4 w3-light-grey">
		<br />
			<div class="w3-container w3-half">
			<label for="product" class="order_label">Product:</label><br />
				<select class="w3-select w3-border" id="product" name="product" required >
					<option value="">Select one</option>
					<option>iPad</option>
					<option>iPhone 6S</option>
					<option>Galaxy S6</option>
					<option>Galaxy Note 5</option>
					<option>HTC One A9</option>
					<option>LG G4</option>
					<option>Moto X Pure</option>
					<option>Nexus 6P</option>
				</select><div id="err1" name="err1" class="w3-container w3-pale-red w3-border-red error"></div> <!--  w3-leftbar w3-rightbar -->
			<br />
				
			<label for="quantity" class="order_label">Quantity:</label>
				<input class="w3-input w3-border" type="number" id="quantity" name="quantity" required /><div id="err2" name="err2" class="w3-container w3-pale-red w3-border-red error"></div> 
			<br />
				
			<label for="unit_price" class="order_label">Unit Price:</label>
				<input class="w3-input w3-border spin" type="number" id="unit_price" name="unit_price" required /><div id="err3" name="err3" class="w3-container w3-pale-red w3-border-red error"></div> 
			<br />
				
			<label for="discount_rate" class="order_label">Discount:</label>
				<input class="w3-input w3-border spin" type="number" id="discount_rate" name="discount_rate" /><div id="err4" name="err4" class="w3-container w3-pale-red w3-border-red error"></div> 
			<br />
				
			<label for="order_date" class="order_label">Order Date:</label>
				<input class="w3-input w3-border" type="text" id="order_date" name="order_date" required /><div id="err5" name="err5" class="w3-container w3-pale-red w3-border-red error"></div> 
			<br />
			</div>
			
			<div class="w3-container w3-half">
			<label for="first_name" class="order_label">First Name:</label>
				<input class="w3-input w3-border" type="text" id="first_name" name="first_name" required /><div id="err6" name="err6" class="w3-container w3-pale-red w3-border-red error"></div> 
			<br />
					
			<label for="last_name" class="order_label">Last Name:</label>
				<input class="w3-input w3-border" type="text" id="last_name" name="last_name" required /><div id="err7" name="err7" class="w3-container w3-pale-red w3-border-red error"></div> 
			<br />
				
			<label for="payment_type" class="order_label">Payment Method:</label><br />
				<select class="w3-select w3-border" id="payment_type" name="payment_type" required >
					<option value="">Select one</option>
					<option>Visa</option>
					<option>Mastercard</option>
					<option>Discover</option>
					<option>American Express</option>
				</select><div id="err8" name="err8" class="w3-container w3-pale-red w3-border-red error"></div> 
			<br />
					
			<label for="card_number" class="order_label">Card Number:</label>
				<input class="w3-input w3-border" type="text" id="card_number" name="card_number" required /><div id="err9" name="err9" class="w3-container w3-pale-red w3-border-red error"></div> 
			<br />
					
			<label for="security_code" class="order_label">Security Code:</label>
				<input class="w3-input w3-border" type="text" id="security_code" name="security_code" required /><div id="err10" name="err10" class="w3-container w3-pale-red w3-border-red error"></div> 
			<br />
			</div>

			<label for="comments" class="order_label">Comments:</label>
				<textarea class="w3-input w3-border" name="comments" id="comments" name="comments" ></textarea><span id="word_counter"></span>
			<br />
			
			<div id="accept" name="accept">
			<input id ="accepted" name="accepted" class="w3-check" type="checkbox">
				<label>I accept the Terms of Service.</label>
			</div>
			<br /><br />
			
			<div id="buttons">
				<input type="submit" id="order_button" name="order_button" value="Place Order" class="w3-btn w3-round-large w3-green" /><input type="button" id="reset_button" name="reset_button" value="Reset Fields" class="w3-btn w3-round-large w3-red" />
			</div>
			<br />
			
			<div id="dialog" name="dialog" title="Order Complete!"></div>
			<div class="w3-container w3-pale-green w3-border-green" id="output" name="output" ></div>

		</form>
	</div>
</body>
</html>

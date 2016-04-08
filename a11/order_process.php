<?php include "inc/header.php"; ?>

<?php
	if (isset($_POST['order_button']))
	{
		include "inc/order.php";

		$aOrder = new order(array
		(
			"id" => $_POST['id'],
			"product" => $_POST['product'],
			"quantity" => $_POST['quantity'],
			"unit_price" => $_POST['unit_price'],
			"discount_rate" => $_POST['discount_rate'],
			"order_date" => $_POST['order_date'],
			"first_name" => $_POST['first_name'],
			"last_name" => $_POST['last_name'],
			"payment_type" => $_POST['payment_type'],
			"card_number" => $_POST['card_number'],
			"security_code" => $_POST['security_code'],
			"comments" => $_POST['comments']
		));

		$aOrder->printReceipt();
	}
?>

<?php include "inc/footer.php"; ?>
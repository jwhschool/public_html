function init()
{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) 
		{
		myFunction(xhttp);
		}
	};
	xhttp.open("GET", "product_order.xml", true);
	xhttp.send();

	function myFunction(xml) {
		var strHTML = "<table><tr><th>ID</th><th>Product</th><th>Quantity</th><th>Price</th><th>Discount</th><th>Order Date</th><th>Purchaser</th><th>Payment Method</th></tr>";
		orders = xml.responseXML.getElementsByTagName("order");
 
		for (i=0; i<orders.length; i++)
		{
			var tOrder = new order(orders[i]);
			strHTML += tOrder.getHTMLRow();
		}
		
		document.getElementById("output").innerHTML = strHTML + "</table>";
	}
	
	function order(aOrder)
	{
		this.orderID = aOrder.getAttribute("id");
		this.product = aOrder.getElementsByTagName("product")[0].childNodes[0].nodeValue;
		this.quantity = aOrder.getElementsByTagName("quantity")[0].childNodes[0].nodeValue;;
		this.unit_price = aOrder.getElementsByTagName("unit_price")[0].childNodes[0].nodeValue;;
		this.discount_rate = aOrder.getElementsByTagName("discount_rate")[0].childNodes[0].nodeValue;
		this.order_date = aOrder.getElementsByTagName("order_date")[0].childNodes[0].nodeValue;
		this.first_name = aOrder.getElementsByTagName("first_name")[0].childNodes[0].nodeValue;
		this.last_name = aOrder.getElementsByTagName("last_name")[0].childNodes[0].nodeValue;
		this.payment_type = aOrder.getElementsByTagName("payment_type")[0].childNodes[0].nodeValue;
		this.card_number = aOrder.getElementsByTagName("card_number")[0].childNodes[0].nodeValue; 
		this.security_code = aOrder.getElementsByTagName("security_code")[0].childNodes[0].nodeValue;
		
		this.getHTMLRow = function()
		{
			var strHTML = "<tr>";
			strHTML += "<td>" + this.orderID + "</td>";
			strHTML += "<td>" + this.product + "</td>";
			strHTML += "<td>" + this.quantity + "</td>";
			strHTML += "<td>" + this.unit_price + "</td>";
			strHTML += "<td>" + this.discount_rate + "%" + "</td>";
			strHTML += "<td>" + this.order_date + "</td>";
			strHTML += "<td>" + this.first_name + " " + this.last_name + "</td>";
			strHTML += "<td>" + this.payment_type + "</td>";
			return strHTML + "<tr>";
		}
	}
}

window.onload = init;
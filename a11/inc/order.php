<?php
class order 
{
	private $product;
	private $quantity;
	private $unit_price;
	private $discount_rate;
	private $order_date;
	private $first_name;
	private $last_name;
	private $payment_type;
	private $card_number;
	private $security_code;

	public function __construct($aArray)
	{
		$this->product = $aArray["product"];
		$this->quantity = $aArray["quantity"];
		$this->unit_price = $aArray["unit_price"];
		$this->discount_rate = $aArray["discount_rate"];
		$this->order_date = $aArray["order_date"];
		$this->first_name = $aArray["first_name"];
		$this->last_name = $aArray["last_name"];
		$this->payment_type = $aArray["payment_type"];
		$this->card_number = $aArray["card_number"];
		$this->security_code = $aArray["security_code"];
	}

	public function printReceipt()
	{
		echo $this->product;
		echo $this->quantity;
		echo $this->unit_price;
		echo $this->discount_rate;
		echo $this->order_date; 
		echo $this->first_name;
		echo $this->last_name;
		echo $this->payment_type;
		echo $this->card_number;
		echo $this->security_code;
	}
}
?>
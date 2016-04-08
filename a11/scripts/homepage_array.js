function setTimer()
{
  var timer = setInterval("animate()", 3000);
}

function animate()
{
	var pics = new Array();

	pics[0] = new Image();
	pics[0].src = "images/logos/w3schools-logo.png";
	pics[1] = new Image();
	pics[1].src = "images/logos/jquery-logo.jpg";
	pics[2] = new Image();
	pics[2].src = "images/logos/so-logo.png";
	pics[3] = new Image();
	pics[3].src = "images/logos/caine-logo.png";
	pics[4] = new Image();
	pics[4].src = "images/logos/deft-logo.jpg";
	
	index ++;
	if (index > 4)
	{
		index = 0;
	}
	
	document.images[0].src = pics[index].src;
}

function init()
{
	setTimer();
}

var index = 0;
window.onload = init;
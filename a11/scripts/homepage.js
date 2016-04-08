var index = 0;

function animate() 
{
	var slide = $(".slides");
	
	for (i = 0; i < slide.length; i++) 
	{
		slide[i].style.display = "none";  
	}
	
	index++;
	if (index > slide.length) {index = 1;}    
	
	slide[index-1].style.display = "block";  
	setTimeout(animate, 2000);    
}

window.onload = animate;
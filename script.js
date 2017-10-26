
$(document).ready(function(){
	
	for(var i=1; i<=4; i++)
	{
		var x = document.getElementsByClassName('c'+i);
		if(i%2==1)
		{
			$(".c"+i).css({
				'perspective-origin' : '60% 0%',
				'z-index' : i
			});
		}
		else 
		{
			$(".c"+i).css({
				'perspective-origin' : '40% 0%',
				'z-index' : i
			});
		}
	}
   
})
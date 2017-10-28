
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

	var count = -1;

	document.addEventListener("keydown", function(e){
		var keyCode = e.keyCode || e.which,
        arrow = {left: 37, right: 39};

        if(keyCode == arrow.right){
        		var rotateangle = (Math.random()-0.5)*20;
        		var translateval = (Math.random()-0.5)*30;
        
        		document.getElementsByClassName("card")[count+1].style.opacity = "1";
        
        		var animate = setTimeout(function(){
        			document.getElementsByClassName("card")[count].style.transform = "rotateX(20deg) rotateY(-5deg) rotateZ("+(rotateangle)+"deg) translateZ(300px) ";
        		},0);
        
        		var animate1 = setTimeout(function(){
        			document.getElementsByClassName("card")[count].style.transform = "rotateX(20deg) rotateY(-5deg) rotateZ("+(rotateangle)+"deg) translateZ(160px)";
        		},700/5);
        
        		var animate2 = setTimeout(function(){
        			document.getElementsByClassName("card")[count].style.transform = "rotateX(20deg) rotateY(-5deg) rotateZ("+(rotateangle)+"deg) translateZ(20px)";
        		},1400/5);
        
        
        		var animate3 = setTimeout(function(){
        			document.getElementsByClassName("card")[count].style.transform = "rotateX(-10deg) rotateY(5deg) rotateZ("+(rotateangle)+"deg) translateZ(20px) translateX("+(translateval)+"px)";
        		},2100/5);
        
        		var animate4 = setTimeout(function(){
        			document.getElementsByClassName("card")[count].style.transform = "rotateX(1deg) rotateY(-1deg) rotateZ("+(rotateangle)+"deg) translateZ(0px) translateX("+(translateval)+"px)";
        		},2800/5);
        
        		var animate5 = setTimeout(function(){
        			document.getElementsByClassName("card")[count].style.transform = "rotateX(0deg) rotateY(0deg) rotateZ("+(rotateangle)+"deg) translateZ(0px) translateX("+(translateval)+"px)";
        		},3500/5);
        
        		count++;
        	}

        	else if(keyCode == arrow.left){
        		document.getElementsByClassName("card")[count].style.opacity = "0";
        		document.getElementsByClassName("card")[count].style.transform = "translateZ(1000px)";
        		count--;
        	}
	});
		
   
})
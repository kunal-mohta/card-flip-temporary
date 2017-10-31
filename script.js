var keys = new Array(); // search why can't the array be inside jquery
$(document).ready(function(){

        for(var i=1; i<=8; i++)
	{
		var x = document.getElementsByClassName('c'+i);
		if(i%2==1)
		{
			$(".c"+i).css({
				'perspective-origin' : '80% 0%',
				'z-index' : i
			});
		}
		else 
		{
			$(".c"+i).css({
				'perspective-origin' : '20% 0%',
				'z-index' : i
			});
		}
	}

         var count = 0;
         var k = 0;

        document.addEventListener("keydown", function(e){
                var keyCode = e.keyCode || e.which;
        function codeExists(keyCode, count)
        {
                var flag=0;
                for(var i=0; i<count; i++)
                {
                        if(keys[i] == keyCode)
                                {
                                        flag=1;
                                        break;
                                }
                }
                if(flag==0)
                        return true;
                else
                        return false;
        }
                if(((keyCode>=49 && keyCode <=56) || (keyCode >= 97 && keyCode<=104)) && codeExists(keyCode, count))
                {
                        keys.push(keyCode);
                        count++;
                        k++;
                        $('#card'+(keyCode-48)).css({
                                'z-index' : k,
                        });
                        $('.c'+(keyCode-48)).css({
                                'z-index' : k,
                        });

                        var rotateangle = (Math.random()-0.5)*30;
                        var translateval = (Math.random()-0.5)*40;
                        document.getElementsByClassName("card")[keyCode-50+1].style.opacity = "1";
        
                        var animate = setTimeout(function(){
                                document.getElementsByClassName("card")[keyCode-50+1].style.transform = "rotateX(20deg) rotateY(-5deg) rotateZ("+(rotateangle)+"deg) translateZ(300px) ";
                        },0);
        
                        var animate1 = setTimeout(function(){
                                document.getElementsByClassName("card")[keyCode-50+1].style.transform = "rotateX(20deg) rotateY(-5deg) rotateZ("+(rotateangle)+"deg) translateZ(160px)";
                        },700/5);
        
                        var animate2 = setTimeout(function(){
                                document.getElementsByClassName("card")[keyCode-50+1].style.transform = "rotateX(20deg) rotateY(-5deg) rotateZ("+(rotateangle)+"deg) translateZ(20px)";
                        },1400/5);
        
        
                        var animate3 = setTimeout(function(){
                                document.getElementsByClassName("card")[keyCode-50+1].style.transform = "rotateX(-10deg) rotateY(5deg) rotateZ("+(rotateangle)+"deg) translateZ(20px) translateX("+(translateval)+"px)";
                        },2100/5);
        
                        var animate4 = setTimeout(function(){
                                document.getElementsByClassName("card")[keyCode-50+1].style.transform = "rotateX(1deg) rotateY(-1deg) rotateZ("+(rotateangle)+"deg) translateZ(0px) translateX("+(translateval)+"px)";
                        },2800/5);
        
                        var animate5 = setTimeout(function(){
                                document.getElementsByClassName("card")[keyCode-50+1].style.transform = "rotateX(0deg) rotateY(0deg) rotateZ("+(rotateangle)+"deg) translateZ(0px) translateX("+(translateval)+"px)";
                        },3500/5);
                        console.log(count);
                        console.log(keys);
                }

                if(count>0)
                {
                        if(keyCode == 37){
                                var x = keys[count-1] - 49;
                                document.getElementsByClassName("card")[x].style.opacity = "0";
                                document.getElementsByClassName("card")[x].style.transform = "translateZ(1000px)";
                                keys.splice(count-1, 1);
                                count--;
                                console.log(count);
                                console.log(keys);
                        }
                }
        }); 
})
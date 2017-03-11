var calculator= (function(){

		var calculator;
		var calculator_buttons;
		var screen;
		

		var calculate = (function(s){
			try{
				var answer = eval(s);
				return answer;	
			}
			catch(e){
				return "error";
			}
			

		});

		function setScreenFont(s){
			var fontsize = 600/(s.toString().length);
			if(fontsize <60) screen.style.fontSize = fontsize+"px";
			else screen.style.fontSize = "60px";
			screen.innerHTML = s.toString().toUpperCase();
				
		}

		var onClickHandler = (function(e){
				
				//console.log(e.target.getAttribute('data'));
				var data = e.target.getAttribute('data').trim();
				var answer;	
				if(data ==="C"){
					setScreenFont("");
			
				}
				else if(data==="="){
					answer = calculate(screen.innerHTML);
					setScreenFont(answer);
					
				}
				else{
					if(screen.innerHTML === "INFINITY" || screen.innerHTML  === "ERROR"){
						setScreenFont(data);
					}
					else{
					setScreenFont(screen.innerHTML.trim()+data);
					}
				}
 


		});

		var cacheDOM = (function(){
			calculator = document.getElementById('calculator');
			calculator_buttons = document.getElementsByClassName('button');
			screen = document.getElementById('screen');

		});

		var setInitialState = (function(){
			for(var i =0;i<calculator_buttons.length;i++){
				calculator_buttons[i].addEventListener("click",onClickHandler);
				var data = calculator_buttons[i].children[0].innerHTML.trim();
				calculator_buttons[i].setAttribute('data',data);
				calculator_buttons[i].children[0].setAttribute('data',data);
			}
		});

		var init = (function(){
			cacheDOM();
			setInitialState();
		});


		return {
			init: init,
		};

});

calculator().init();
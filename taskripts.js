// JavaScript Document

function allaxeEikona(){
		var eikona=document.getElementById('eikona');
		if(eikona.src.match("bulb1.png")) {
			eikona.src="bulb2.png";
		} else {
			eikona.src="bulb1.png";}
		}
	
	function CheckPoint() {
		var x, text;
		x = document.getElementById('number').value;
		
		if (isNaN(x) || x<1 || x>10) {
			text = "What are you doing? I said to enter a number between 1 and 10";
		} else {
			text = "success";}
		document.getElementById('upovoli').innerHTML =text;	
				}

window.alert("Congratulations. You are the winner of the new iphone SE");
				
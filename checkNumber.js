document.getElementById("submitText").onclick = function(){
	var value1 = document.getElementById("quantity1").value;
var value2 = document.getElementById("quantity2").value;
const a = 100;
var difference1 = value1-a;
var difference2 = value2-a;

if( Math.abs(difference1) > Math.abs(difference2))
document.getElementById("result").innerHTML = value2+" is the number closer to 100";
else
document.getElementById("result").innerHTML = value1+" is the number closer to 100";
}
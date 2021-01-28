function clock(){

const currentTIme = new Date()
var hours = currentTIme.getHours()
var minutes = currentTIme.getMinutes()
var seconds = currentTIme.getSeconds()
var zone = "am"

if(seconds < 10){
	seconds = "0" + seconds;
}

if(minutes < 10){
	minutes = "0" + minutes;
}

if(hours < 10){
	hours = "0" + hours;
}

if(hours >= 12){
	zone = "pm"
}

if(hours>12){
	hours = hours-12;
}

document.querySelector(".MyClock").innerHTML = hours+":"+minutes+":"+seconds+" "+zone}

setInterval(clock, 1000)
function showDate(){
 	 	var date = new Date();
 	 	var dd=date.getDate();
 	 	//var dd = String(date.getDate()).padStart(2, '0');
//var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
var mm=["January","February","March","April","May","June","July","August","September","October","November","December"];
var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
today = a[date.getDay()]+" ,"+" "+dd + " "+mm[date.getMonth()]+" "+ yyyy;
document.getElementById("datetoday").innerText = today;
        document.getElementById("datetoday").textContent = today;
 	 }
 	 function showTime()
 	 {
 	 	var date = new Date();
 	 	
 	 	var h = date.getHours();
 	 	var m = date.getMinutes();
 	 	var s = date.getSeconds();
 	 	var am_pm="AM";
 	 	if(h==0)
 	 	{
 	 		h=12;
 	 	}
 	 	if(h>=12)
 	 	{
 	 		if(h==12)
 	 			 am_pm="PM";
 	 		else{
 	 		h=h-12;
 	 		am_pm="PM";}
 	 	}
 	 	if(h<10)
 	 		 {
 	 		 	h= "0" +h;
 	 		 }

 	 		if(m<10)
 	 		 {
 	 		 	m = "0" +m;
 	 		 }
 	 		 if(s<10)
 	 		 {
 	 		 	s= "0" +s;
 	 		 } 
 	 	var time= h + ":" + m + ":" + s+" "+am_pm;
 	 	document.getElementById("MyClock").innerText = time;
        document.getElementById("MyClock").textContent = time;
        setInterval(showTime,1000);
 	 }
 	 showTime();
 	 showDate();

function makeNavbar(addon){
	if (addon == undefined) addon = "";


	document.getElementById("navarea").innerHTML = document.getElementById("navarea").innerHTML = "<nav class='navbar navbar-inverse'>" +
	"<a href='index.html' class='navbar-left'><img src='" + addon + "images/ScreenSmith.png'></a>" +
	"<div class='container-fluid'><div class='navbar-header'><button type='button' class='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>Menu</button>" + 
	"<a class='navbar-brand' href='" + addon + "index.html'>Screen Smith Studios</a></div>      <div class='collapse navbar-collapse float_right' id='myNavbar'><ul class='nav navbar-nav'>" + 
	"<li><a href='" + addon + "index.html'>Home</a></li>" + 
	"<!--<li><a href='" + addon + "index.html#events'>Events</a></li>-->" + 
	"<li><a href='" + addon + "index.html#games'>Games</a></li>" + 
	//"<li><a href='" + addon + "portfolio.html'>Portfolio</a></li>"+
	"<li><a href='" + addon + "index.html#contact'>Contact</a></li>"+
	"</ul></div></div></nav>";
	//<li><a href='about.html'>About</a></li>
	document.getElementsByTagName("head")[0].appendChild("<link rel='shortcut icon' type='image/x-icon' href='"+ addon +"plswork.ico'>");
	}

function makeNavbarFolder(){
	document.getElementById("navarea").innerHTML = document.getElementById("navarea").innerHTML = "<nav class='navbar navbar-inverse'> <a href='../index.html' class='navbar-left'><img src='../images/logo.png'></a><div class='container-fluid'><div class='navbar-header'><button type='button' class='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>Menu</button><a class='navbar-brand' href='../index.html'>UMD GDC</a></div>      <div class='collapse navbar-collapse float_right' id='myNavbar'>        <ul class='nav navbar-nav'>       <li><a href='../index.html'>Home</a></li>     <li><a href='../events.html'>Events</a></li>     <li><a href='../games.html'>Games</a></li>                          <li><a href='../index.html#contact'>Contact</a></li></ul></div></div></nav>";
}


function makeFooter(){

    document.getElementById("footer").innerHTML = "<div class = \"footertext\"><h2 style=\"font-family: 'Press Start 2P', cursive !important;\">Contact</h2>    <p>Email: screensmithstudios@gmail.com</p></div>    <br/> " + 
	
	"<button class='steamButton' onclick='' ><a class='' href='https://store.steampowered.com/app/1820790/PictoPull/' style='width: 40px !important; height: 40px !important;'><i class='fa-brands fa-steam fa-4x'></i></a></button>&nbsp;&nbsp;&nbsp;"+
	"<button class='twitterButton1' onclick='' ><a href='https://twitter.com/scrnsmthstudios' class=''><i class='fa-brands fa-twitter fa-4x'></i></a></button>&nbsp;&nbsp;&nbsp;"+
	"<button class='discordButton' onclick='' ><a href='https://discord.gg/vm2f3ZYZJb' class=''><i class='fa-brands fa-discord fa-4x'></i></a></button>&nbsp;&nbsp;&nbsp;"+
	"<button class='itchButton' onclick='' ><a href='https://screensmith.itch.io/pictopull' class=''><i class='fa-brands fa-itch-io fa-4x'></i></a></button>&nbsp;&nbsp;&nbsp;"+
    "<button class='githubButton' onclick='' ><a href='https://github.com/josfeldmann' class=''><i class='fa-brands fa-github fa-4x'></i></a></button>" + 
	"<br><br>" ;
	

	
	
	//<a href='https://discord.gg/vm2f3ZYZJb' class = 'fame discord'><i class='fab fa-discord'></i></a>  <a href='https://github.com/josfeldmann' class='fame github'><i class='fab fa-github'></i></a>  ";

}


//

/*



*/




function makeHeader(){



}


var events = [
		
	[[9, 20 , 2018], "Interest Meeting", "7:00 PM", "CSIC 1121", "Catch up and discuss semester goals and meeting structure"],
	[[9, 27 , 2018], "First Look Prep Meeting", "7:00 PM", "CSIC 1121","Prepare Demos for first look fair and get volunteers"],
	[[10, 4 , 2018], "First Look Meeting", "7:00 PM", "CSIC 1121", "Inform new people about the club and demo"],
	[[10, 11 , 2018], "Unity Tutorial: Joey", "7:00 PM", "CSIC 1121", "Basic Unity tutorial for complete beginners. Covers unity workflow/inspector and some light scripting"],
	[[10, 18 , 2018], "Unity Tutorial: Josh","7:00 PM", "CSIC 1121", "Basic Unity tutorial for complete beginners. Covers unity workflow/inspector and some light scripting"],
	[[10, 25 , 2018], "GameMaker Tutorial: Stephen","3:00 PM", "CSIC 1121", "Basic GameMaker tutorial for complete beginners. Covers GM workflow, objects, and inspector"]
			
];

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



function nth(d) {
	if(d>3 && d<21) return 'th'; // thanks kennebec
	switch (d % 10) {
		  case 1:  return "st";
		  case 2:  return "nd";
		  case 3:  return "rd";
		  default: return "th";
	  }
  } 

function nextMeeting () {

	var nmeeting = document.getElementById("nmeeting");
	
	
	var d = new Date();
	
	var curmonth = d.getMonth();
	var curday = d.getDate();
	var curyear = d.getFullYear();
	
    
    
    var thingy = events.length;

	
	for (var i = 0; i < thingy; i++){
		
	var eventdate = events[i][0];
	
	
	//add to upcoming table	
	if (eventdate[0] > curmonth + 1 || (eventdate[0] === (curmonth + 1) && eventdate[1] >= curday) && eventdate[2] >= curyear){
		
		if (events[i][1].includes("eeting")){
		   nmeeting.innerHTML = "Next meeting will be held on " + months[events[i][0][0]-1] + " " + events[i][0][1] + nth(events[i][0][1]) + " at " + events[i][2] + " in " + events[i][3];
		   i = thingy;

		}
	}
}



}

function MakeTables(ishome){
	"use strict";

	
	
	var uTable = document.getElementById("upcoming");
	
	var pTable = document.getElementById("past");
	
	
	var row = uTable.insertRow(0);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(2);
	
	cell1.innerHTML = "Date";
	cell2.innerHTML = "Event";
	cell3.innerHTML = "Time";
	cell4.innerHTML = "Location";
	
	var d = new Date();
	
	var curmonth = d.getMonth();
	var curday = d.getDate();
	var curyear = d.getFullYear();
	
    var ucounter = 0;
    
    var thingy = events.length;

    if (ishome) {thingy = 3;}

	
	for (var i = 0; i < thingy; i++){
		
	var eventdate = events[i][0];
	
	//add to upcoming table	
	if (eventdate[0] > curmonth + 1 || (eventdate[0] === (curmonth + 1) && eventdate[1] >= curday + 1) && eventdate[2] >= curyear){
		
	row = uTable.insertRow(ucounter + 1);
    cell1 = row.insertCell(0);
	cell2 = row.insertCell(1);
	cell3 = row.insertCell(2);
	cell4 = row.insertCell(2);
	
		
	cell1.innerHTML = eventdate[0] + "/" + (eventdate[1]) ;
	cell2.innerHTML = events[i][1];
	cell3.innerHTML = events[i][2];
	cell4.innerHTML = events[i][3];
		
	ucounter++;
		
	//add details row
	row = uTable.insertRow(ucounter + 1);
	cell1 = row.insertCell(0);
	cell1.className = "hiddenrow";	
	cell1.colSpan = 4;
	cell1.innerHTML = events[i][4];
	cell1.style.display = 'none';
	ucounter++;	
	} else {		}
}
	
	
	
}

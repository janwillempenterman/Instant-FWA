f = document.createElement("IMG");
f.src = "http://labs.tribalddb.nl/fwa/fwa.png";
f.style.position = "absolute";
f.style.top  = "0px";
f.style.right = "0px";
f.style.cursor = "pointer";
f.onclick = function() { window.location = "http://thefwa.com/" }
b = document.getElementsByTagName("BODY");
b[0].appendChild(f);
window.scrollTo(0,0);
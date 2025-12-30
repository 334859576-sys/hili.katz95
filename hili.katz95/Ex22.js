//targil1
var div = document.getElementById("aElement");
var aEl = document.createElement("a");
aEl.setAttribute("href", "http://www.google.com");
aEl.innerHTML = "GOOGLE";
div.appendChild(aEl);
//targil2
var div2 = document.getElementById("imgElement");
var imgEl = document.createElement("img");
imgEl.setAttribute("src", "nof.jpg", "https://www.example.com/image.jpg");
imgEl.setAttribute("height", "200");
imgEl.setAttribute("width", "200");
div2.appendChild(imgEl);
//targil3
var div3 = document.getElementById("pElement");

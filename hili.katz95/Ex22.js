//targil1
//var div = document.getElementById("aElement");
//var aEl = document.createElement("a");
//aEl.setAttribute("href", "http://www.google.com");
//aEl.innerHTML = "GOOGLE";
//div.appendChild(aEl);
//targil2
//var div2 = document.getElementById("imgElement");
//var imgEl = document.createElement("img");
//imgEl.setAttribute("src", "nof.jpg");
//imgEl.setAttribute("height", "200");
//imgEl.setAttribute("width", "200");
//div2.appendChild(imgEl);
//targil5
//var div3 = document.getElementById("pElement");
var table = document.getElementById("table");
var num = prompt("Enter a number");
num = parseInt(num);
for (let i = 1; i <= num; i++) {
    var shura = document.createElement("tr");
    var amud1 = document.createElement("td");   
    var amud2 = document.createElement("td");
    shura.appendChild(amud1);
    shura.appendChild(amud2);
    table.appendChild(shura);
    var imgEl1 = document.createElement("img");
    imgEl1.setAttribute("src", "nof" + i + ".jpg");
    imgEl1.setAttribute("height", 100);
    imgEl1.setAttribute("width", 200);
    amud1.appendChild(imgEl1);
    var link = document.getElementById("link" + i);
    amud2.appendChild(link);
    if (i % 2 == 0) {
        shura.style.backgroundColor = "lightblue";
    }


}
  
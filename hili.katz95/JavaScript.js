
function newNumbers() {
    var num1 = document.getElementById("num1").value;
    num1 = 8;
    alert(num1);
    var num2 = document.getElementById("num2").value;
    num1 = parseInt(Math.random() * 10) + 1;
    document.write(num2);
}

function checkAnswer() {
    var result = document.getElementById("m1").value;
    result = num1 + num2;
    var num3 = document.getElementById("num3").value;
    if (result == num3) {
        alert("Correct!");
    }
    else {
        alert("Incorrect");

    }


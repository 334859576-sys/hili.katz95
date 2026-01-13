let num1 = 0;
let num2 = 0;

let a = 0;
let b = 0;

let a1 = 0;
let b1 = 0;

let a2 = 0;
let b2 = 0;

function newNumbers() {
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    document.getElementById("num1").value = num1;
    document.getElementById("num2").value = num2;

    a = Math.floor(Math.random() * 10);
    b = Math.floor(Math.random() * 10);
    document.getElementById("a").value = a;
    document.getElementById("b").value = b;

    a1 = Math.floor(Math.random() * 10);
    b1 = Math.floor(Math.random() * 10);
    document.getElementById("a1").value = a1;
    document.getElementById("b1").value = b1;

    a2 = Math.floor(Math.random() * 10);
    b2 = Math.floor(Math.random() * 10);
    document.getElementById("a2").value = a2;
    document.getElementById("b2").value = b2;

}

function checkAnswer() {
    let num3 = Number(document.getElementById("num3").value);
    if (num3 == num1 + num2) {
        document.getElementById("m1").value = "Correct";
    }
    else {
        document.getElementById("m1").value = "Incorrect";
    }


    let c = Number(document.getElementById("c").value);
    if (c == a - b) {
        document.getElementById("m2").value = "Correct";
    }
    else {
        document.getElementById("m2").value = "Incorrect";
    }


    let c1 = Number(document.getElementById("c1").value);
    if (c1 == a1 * b1) {
        document.getElementById("m3").value = "Correct";
    }
    else {
        document.getElementById("m3").value = "Incorrect";
    }


    let c2 = Number(document.getElementById("c2").value);
    if (c2 == a2 / b2) {
        document.getElementById("m4").value = "Correct";
    }
    else {
        document.getElementById("m4").value = "Incorrect";
    }
}



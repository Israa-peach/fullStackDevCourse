var firstNumber = prompt("What's the first number?");
var secondNumber = prompt("What's the second number?");
var opp = prompt("What operation do you want ?");
var res;

if(opp === "+"){
    res = firstNumber + secondNumber;
}

if(opp === "*"){
    res = firstNumber * secondNumber;
}

if(opp === "-"){
    res = firstNumber - secondNumber;
}

if(opp === "/"){
    res = firstNumber / secondNumber;
}
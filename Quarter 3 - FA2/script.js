function addition(a, b) {
    return a + b;
}


function subtraction(a, b) {
    return a - b;
}


function multiplication(a, b) {
    return a * b;
}


function division(a, b) {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
}


function modulus(a, b) {
    if (b === 0) return "Cannot divide by zero";
    return a % b;
}


function displayResult(operation) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);


    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerHTML = "Please enter valid numbers.";
        return;
    }


    let result = operation(num1, num2);


    if (operation === addition) {
        document.getElementById("result").innerHTML =
            "The sum of " + num1 + " and " + num2 + " is " + result + ".";
    }
    else if (operation === subtraction) {
        document.getElementById("result").innerHTML =
            "The difference of " + num1 + " and " + num2 + " is " + result + ".";
    }
    else if (operation === multiplication) {
        document.getElementById("result").innerHTML =
            "The product of " + num1 + " and " + num2 + " is " + result + ".";
    }
    else if (operation === division) {
        document.getElementById("result").innerHTML =
            "The quotient of " + num1 + " and " + num2 + " is " + result + ".";
    }
    else if (operation === modulus) {
        document.getElementById("result").innerHTML =
            "The remainder of " + num1 + " divided by " + num2 + " is " + result + ".";
    }
}


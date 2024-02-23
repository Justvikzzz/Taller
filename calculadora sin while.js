let tell = prompt("Que te gustaria hacer? (*,/,+,-)");
let dig1 = prompt("Introduzca el primer numero");
let dig2 = prompt("Introduzca el segundo numero")

function calculate(a,b) {
    switch (tell) {
        case "*":
            return a * b;
        case "/":
            return a / b;
        case "+":
            return a + b;
        case "-":
            return a - b;
        default:
            return "No escogio una operacion valida"
    }
}

alert(calculate(+dig1, +dig2))
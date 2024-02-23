let tell = prompt("Que te gustaria hacer? (*,/,+,-)");
let dig1 = prompt("Introduzca el primer numero");
let dig2 = prompt("Introduzca el segundo numero")

function calculate(number1,number2) {
    switch (tell) {
        case "*":
            return number1 * number2;
        case "/":
            return number1 / number2;
        case "+":
            return number1 + number2;
        case "-":
            return number1 - number2;
        default:
            return "No escogió una operacion valida"
    }
}

alert(calculate(+dig1, +dig2))

let keepGoing = true;

while (keepGoing) {
    let tell = prompt("Que te gustaria hacer? (*,/,+,-) o escribe 'salir' para terminar");

    if (tell.toLowerCase() === 'salir') {
        keepGoing = false;
        break;
    }

    let dig1 = prompt("Ingrese el primer numero");
    let dig2 = prompt("Ingrese el segundo numero");

    let result = calculate(Number(dig1), Number(dig2));

    alert(result);
}

function calculate(a,b) {
    // check the value of the `tell` is one of these cases and return the result.
    switch (tell) {
        case "*":
            return number1 * number2;
           
           
        case "/":
            return number1 / number2;
            case "+":
            return number1 + number2;
        case "-":
            return number1 - number2;
           
        default:
            return "No escogió una operacion valida"
           

    }
}
 

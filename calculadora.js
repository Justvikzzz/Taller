//! SE NECESITA SOLUCIONAR

let tell = prompt("Que te gustaria hacer? (*,/,+,-)");
let dig1 = prompt("Ingrese el primer numero");
let dig2 = prompt("Ingrese el segundo numero")

function calculate(a,b) {
    // check the value of the `tell` is one of these cases and return the result.
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
            return "You didn't a correct opertor"
            

    }
}
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
            return a * b;
           
           
        case "/":
            return a / b;
            case "+":
            return a + b;
        case "-":
            return a - b;
           
        default:
            return "You didn't a correct opertor"
           

    }
}
 

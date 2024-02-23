const cars = new Array("Porsche 911", "Porsche Taycan", "Porsche Panamera", "Porsche 718");

console.log(cars[0])
console.log(cars[1])
console.log(cars[2])
console.log(cars[3])

for(let i = 0; i < cars.length; i++){
    console.log("El modelo de carro es " + cars[i])
}
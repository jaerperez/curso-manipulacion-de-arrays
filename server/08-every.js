const numbers = [1, 30, 41, 29, 10, 13]

let respuesta = true
for (let i=0; i < numbers.length; i++){
    const element = numbers[i]
    if (element >= 40) {
        respuesta = false
        break
    }
}

console.log('Rta1',respuesta) // false

const rta2 = numbers.every(item => item <= 40)
console.log('rta2',rta2) // true
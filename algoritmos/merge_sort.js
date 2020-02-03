
const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 4];
//Declarar una función que nos sirva para dividir en su longitud el arreglo
function divide(array) {
    let p
    let a
    for (let i = 1; i < array.length; i++) {
        p = (array.length / (i * 2))
        console.log(p)
        while (p <= 1) {
            p = (array.length / (i * 2))
            
    
        }
    }
    return p
}
console.log(divide(array));



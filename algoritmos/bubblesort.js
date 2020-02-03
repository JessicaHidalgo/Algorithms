//Definir una función para mandar llamar a la variable 
//Definir un arreglo 
const array =[0,3,2,-1,4,-3]
function bubble(array){
//Definir la variable temporal que vamos a estar llamando cada que haya un cambio en la variable
let temp
//reservar espacio para la memoria puede ser sin igual!!
// Para el número en la posición (i) hasta el número en la posición última 
for (let j=0;j<=array.length;j++){
for (let i=0;i<=array.length;i++){  
    if(array[i]>array[i+1]){
        temp = array[i];
        array[i]=array[i+1]
        array[i+1]=temp }
}
}
return array
}
console.log(bubble(array));
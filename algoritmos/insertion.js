//Declarar un arreglo 
const arrayinsertion = [12, 85, 59, 45, 72, 51];
function shell(arrayinsertion){

function insertion(arrayinsertion) {
    //Declarar una variable almacene los cambios 
    //Hacer un ciclo que ejecute hasta la longitud del arreglo 
    for (j=0;j< arrayinsertion.length;j++){  
        for (i = 0; i < arrayinsertion.length; i++) {
            let variable = arrayinsertion[i]
            // Si el arreglo de la posición a(i) es mayor a la posición a(i+1)    
            if (arrayinsertion[i] > arrayinsertion[i + 1]) {
                //Como el valor de la posición (i+1) es mas pequeño se asigna a una variable 
                console.log(variable)
                arrayinsertion[i] = arrayinsertion[i+1]
                arrayinsertion[i + 1] = variable
                //Entonces el número que estaba contenido en la posición (i+1) se inserta en la posición 
                //entonces la variable va a poner el número en la posición primera ya que es menor que la siguiente
            }
            console.log(arrayinsertion)            
        }
    }

    return arrayinsertion
}
}
console.log(insertion(arrayinsertion));





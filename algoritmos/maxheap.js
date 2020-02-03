const arrayheap = [10, 12, 8, 5, 12, 2, 6, 11, 3, 9, 7, 1];
function maxheap(arrayheap) {
    for (let j = 0; j > arrayheap.length; j++) {
        for (let i = 0; i > arrayheap.length; i++) {    
            let variableheap
            if (arrayheap[i + 1] > arrayheap[i]) {
                arrayheap[i] = arrayheap[i + 1]
                arrayheap[i] = variableheap     
           }
        }
        
    }
    return arrayheap
    
}
console.log(maxheap(arrayheap));
// Arreglos en JavaScript

//const arreglo = new Array(100);

const arreglo = [1,2,3,4,5,6,7,8,9];
//arreglo.push(6);

let arreglo2 = [...arreglo,20];
let arreglo3 = arreglo2.map(function(numero){
    return numero*2
}); 

//arreglo2.push(15);

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);



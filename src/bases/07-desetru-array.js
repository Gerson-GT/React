// desestructuracion de arreglos

const personajes = [ 'Goku', 'Vegeta', 'Trunks'];

const [,p22] = personajes;

console.log(p22);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros]  = retornaArreglo();
console.log(letras,numeros);

//Tarea
//1. El primer valor del arreglo se llamara nombre
//2. El segundo se llamara setNombre
const useState = (valor) => {
    return[valor, ()=>{ console.log('Hola Mundo')}];
}

const [nombre, setNombre] = useState( 'Goku' );
console.log(nombre)
setNombre();
// Funciones en JavaScript


// Metodo aconsejado de como crear nuestras funciones
const saludar = function (nombre){
    return `Hola, ${nombre}`;
}

// Ejemplo de una funcion de flecha

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`; //una funcion simplificada ya que solo tiene 1 return
const saludar4 = () => `Hola Mundo`; //una funcion

const getUser = () => {
    return{
        uid: 'abc123',
        username: 'lop161310'
    }
}

// siempre retornamos un objeto
const getUser2 = () => 
  ({  
        uid: 'abc123',
        username: 'lop161310'
  })    

// Tarea
// 1. Transformar a una funcion de flecha
// 2. Tiene que retornar un objeto implicito
// 3. pruebas


const getUsuarioActivo = (nombre) => 
    ({
        uid:'rep502',
        username:nombre
    })
    

const usuarioActivo = getUsuarioActivo('Bruno'); 
console.log(usuarioActivo);



console.log(saludar3('Gerson'));
console.log(saludar4());
console.log(getUser());
console.log(getUser2());

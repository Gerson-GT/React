// Desestructuracion - Asigncion Desestructurante

const persona = {
    nombre: 'Alessandro',
    edad: 24,
    clave: 'Hexa'
};

//const {nombre:username, edad, clave} = persona;

//console.log(username);
//console.log(edad);
//console.log(clave);

const retornaPersona = (usuario) => {
    //console.log(usuario);
    const {nombre, edad, clave} = usuario;
    console.log(nombre, edad, clave);

}

const useContext = ({nombre, edad, clave, rango = 'Capitan'}) => {
    //console.log(nombre, edad, rango);
    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.164,
            lng: -15.155
        }
    }
}

const {nombreClave, anios ,latlng } = useContext(persona);
const {lat, lng } = latlng;

console.log(nombreClave, anios);
console.log(lat, lng);
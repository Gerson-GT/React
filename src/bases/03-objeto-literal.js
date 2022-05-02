// Objetos literarios

const persona = {
    nombre: 'Gerson',
    apellido: 'Lopez',
    edad: 24,
    direccion: {
        ciudad: 'New York',
        zip: 51723231,
        lat: 14.54231,
        lng: 34.9515131
    }
};
const persona2 = {
    nombre: 'Alessandro',
    apellido: 'Magri',
    edad: 14,
    direccion: {
        ciudad: 'New York',
        zip: 217,
        lat: 14.542,
        lng: 34.9515
    }
};

const persona3 ={ ...persona};

//console.table( persona );
console.log( persona );
console.log( persona2 );
console.log( persona3 );

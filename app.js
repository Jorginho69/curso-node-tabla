const argv = require('./config/yargs');
//const { argv } = require('process');
const { crearArchivo } = require('./helpers/multiplicar');
//const { options } = require('yargs');
const colors = require('colors');

console.clear();

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.green, 'creada'.red) )
    .catch( err => console.log(err));

const {texto} = require('./base');

//Quantificadores.

// * (opcionais) 0 ou n
// + (opcionais) 1 ou n
// ? (opcionais) 0 ou 1

console.log(texto);

const regExp1 = /jo+ão+/gi

console.log(texto.match(regExp1));
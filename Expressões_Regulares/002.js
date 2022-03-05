const {texto} = require('./base');

const regExp1 = /João|Maria/gi;
console.log(texto.match(regExp1));

console.log(texto.replace(/joão/gi,"Felipe"));

console.log(texto.replace(/joão|maria/gi, function(input){
    return '########### '+input.toUpperCase() + ' ##########';
}));
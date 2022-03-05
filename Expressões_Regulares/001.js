// g - global(todas as ocorrencias)
// i - sensitive
// () grupos
//| ou

const {texto} = require('./base');

const regExp1 = /joão/gi;

console.log(regExp1.test(texto));
console.log(regExp1.exec(texto)[0]);
var idade = 66;

console.log(`Sua idade é: ${idade}`);

if(idade < 16){
    console.log('Não vota!');
}
else if(idade < 18 || idade > 65){
    console.log('Voto não obrigatorio!');
}
else{
    console.log('Voto obrigatorio!');
}
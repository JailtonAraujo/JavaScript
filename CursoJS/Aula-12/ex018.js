let num = []

for(let i = 1;i<=10;i++){
    num.push(i);
}

console.log(num.indexOf(8));
num.sort();


for(let pos in num){
    console.log(`A posição ${pos} tem o vaor ${num[pos]}`);
}



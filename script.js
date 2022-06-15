//1 - Criar um loop que conte de 1 até 10 usando FOR
let contador = 1;
console.log("Contagem de 1 até 10")
for (let i = 1; i <= 10; i++) {
    console.log(i);    
}

//2 - Criar um loop que conte de 10 até 1 usando WHILE
let contRegresso = 10;
console.log("\n\nContagem regressiva de 10 até 1")
while (contRegresso >= 1) {
    console.log(contRegresso);
    contRegresso --;
}

//3 - Criar um loop que conte todos os números ímpares de 1 até 100
console.log("\n\nContagem dos números ímpares de 1 até 100");
for (let i = 0; i <= 100; i++) {
    if (i%2 == 1) {
        console.log(i);
    }    
}

//4- Criar um loop que conte todos os números pares de 0 a 100
console.log("\n\nContagem dos números pares de 0 até 100")
for (let i = 0; i <= 100; i++) {
    if (i%2 == 0) {
        console.log(i);
    }    
}
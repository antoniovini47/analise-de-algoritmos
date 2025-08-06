const value = 4;
let result = 1;

for (let i=value; i>0; i--) {
    console.log("-----------------ETAPA número ", value-i+1, "----------------");
    console.log("Multiplicando: ", result, "por", i);
    result = result * i;
    console.log("Resultado: ", result);
    console.log("-------------------------------------------------\n\n");
}

console.log(result);
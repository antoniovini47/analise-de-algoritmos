function subindoEscadas(n: number): number {
    if (n <= 1) {
      return 1;
    }
    const resultados: number[] = new Array(n + 1);
  
    resultados[0] = 1;
    resultados[1] = 1;
  
    for (let i = 2; i <= n; i++) {
      resultados[i] = resultados[i - 1] + resultados[i - 2];
    }
  
    return resultados[n];
  }
  
  console.log(`Para n = 1 degrau, existe ${subindoEscadas(1)} maneira.`);
  console.log(`Para n = 2 degraus, existem ${subindoEscadas(2)} maneiras.`); 
  console.log(`Para n = 3 degraus, existem ${subindoEscadas(3)} maneiras.`); 
  console.log(`Para n = 4 degraus, existem ${subindoEscadas(4)} maneiras.`); 
  console.log(`Para n = 5 degraus, existem ${subindoEscadas(5)} maneiras.`); 
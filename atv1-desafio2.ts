function uniquePaths(m: number, n: number): number {
    const resultados: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0));
  
    for (let i = 0; i < m; i++) {
      resultados[i][0] = 1;
    }
    for (let j = 0; j < n; j++) {
      resultados[0][j] = 1;
    }
  

    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {

        resultados[i][j] = resultados[i - 1][j] + resultados[i][j - 1];
      }
    }
  
    return resultados[m - 1][n - 1];
  }
  
  console.log(`Para uma grade 3x2, existem ${uniquePaths(3, 2)} caminhos únicos.`); 
  console.log(`Para uma grade 7x3, existem ${uniquePaths(7, 3)} caminhos únicos.`); 
  console.log(`Para uma grade 3x7, existem ${uniquePaths(3, 7)} caminhos únicos.`); 
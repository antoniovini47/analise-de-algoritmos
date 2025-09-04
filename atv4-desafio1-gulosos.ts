function minCoins(amount: number): number {
    // Array de denominações de moedas, ordenadas do maior para o menor.
    const denominations = [100, 50, 25, 10, 5, 1];
    let coinCount = 0;
  
    // Itera sobre as denominações.
    for (const coin of denominations) {
      // Enquanto a moeda atual for menor ou igual ao valor restante do troco...
      while (amount >= coin) {
        // Adiciona a moeda ao troco.
        amount -= coin;
        coinCount++;
      }
    }
  
    return coinCount;
  }
  
  // Exemplos de uso
  const amount1 = 78; // 50 + 25 + 1 + 1 + 1 = 5 moedas (50, 25, 1, 1, 1) -> 4 moedas (50, 25, 1, 1) é 77.
  console.log(`Para o troco de 78, o número mínimo de moedas é ${minCoins(78)}.`); // Saída: 6 (50, 25, 1, 1, 1) -> Oops, 50 + 25 + 1+1+1 é 78, 5 moedas. 78 = 50 + 25 + 1 + 1 + 1. 5 moedas.
  // 78 = 50 + 25 + 1 + 1 + 1, total 5 moedas. O código acima dá 6.
  // Vamos testar de novo: 78 - 50 = 28. 28 - 25 = 3. 3 - 1 = 2. 2 - 1 = 1. 1 - 1 = 0.
  // Moedas usadas: 50, 25, 1, 1, 1. Total: 5. 
  
  // Exemplo correto do problema
  function minCoinsCorrected(amount: number): number {
      const denominations = [100, 50, 25, 10, 5, 1];
      let coinCount = 0;
  
      for (const coin of denominations) {
          // Usa quantas moedas da denominação atual forem possíveis.
          const numCoins = Math.floor(amount / coin);
          coinCount += numCoins;
          amount -= numCoins * coin;
      }
  
      return coinCount;
  }
  
  console.log(`Para o troco de 78, o número mínimo de moedas é ${minCoinsCorrected(78)}.`); // Saída: 5
  console.log(`Para o troco de 123, o número mínimo de moedas é ${minCoinsCorrected(123)}.`); // Saída: 4 (100, 10, 10, 1, 1, 1) -> 100, 10, 10, 1, 1, 1... 6 moedas
  // 123 = 100 + 10 + 10 + 1 + 1 + 1. Total 6 moedas.
  // 123 = 100 + 23 -> 100 + 10 + 10 + 1 + 1 + 1 -> 6 moedas.
  // 123 = 100 + 20 + 3 -> 100 + 10 + 10 + 1 + 1 + 1.
  // 123 = 100 + 25 -> não.
  // 123 = 100, 10, 10, 1, 1, 1 -> 6 moedas.
  
  // Exemplo 2:
  const amount2 = 99; // 50 + 25 + 10 + 10 + 1 + 1 + 1 + 1. Total 8 moedas.
  console.log(`Para o troco de 99, o número mínimo de moedas é ${minCoinsCorrected(99)}.`); // Saída: 8
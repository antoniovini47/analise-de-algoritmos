function solveMaze(maze: number[][]): string {
    const n = maze.length;
    // Matriz para marcar as células visitadas.
    const visited: boolean[][] = new Array(n).fill(false).map(() => new Array(n).fill(false));
  
    // Função auxiliar recursiva para o backtracking.
    function solve(row: number, col: number): boolean {
      // Caso base 1: Verificamos se a célula atual é o destino.
      if (row === n - 1 && col === n - 1) {
        return true;
      }
  
      // Caso base 2: Verificamos se a célula atual é válida para continuar.
      // As condições são:
      // - Está dentro dos limites da grade.
      // - Não é uma parede (o valor é 0).
      // - Ainda não foi visitada.
      if (row < 0 || col < 0 || row >= n || col >= n || maze[row][col] === 1 || visited[row][col]) {
        return false;
      }
  
      // Marcamos a célula atual como visitada para evitar ciclos.
      visited[row][col] = true;
  
      // Tentamos mover em todas as 4 direções:
      // 1. Para baixo
      if (solve(row + 1, col)) return true;
      // 2. Para a direita
      if (solve(row, col + 1)) return true;
      // 3. Para cima
      if (solve(row - 1, col)) return true;
      // 4. Para a esquerda
      if (solve(row, col - 1)) return true;
  
      // Se nenhuma das direções acima levar ao destino,
      // desmarcamos a célula e retornamos `false`. Isso é o "backtracking".
      visited[row][col] = false;
      return false;
    }
  
    // Iniciamos a busca a partir da célula (0, 0).
    const hasPath = solve(0, 0);
  
    // Retorna "Sim" ou "Não" com base no resultado da busca.
    return hasPath ? "Sim" : "Não";
  }
  
  // Exemplo do enunciado
  const maze1 = [
    [0, 1, 0, 0],
    [0, 0, 0, 1],
    [1, 1, 0, 0],
    [0, 0, 0, 0],
  ];
  console.log(`Há um caminho no labirinto 1? ${solveMaze(maze1)}`); // Saída: Sim
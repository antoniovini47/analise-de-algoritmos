function canPartitionSum(nums: number[], target: number): boolean {

    const resultados: boolean[][] = new Array(nums.length + 1)
      .fill(false)
      .map(() => new Array(target + 1).fill(false));
  

    for (let i = 0; i <= nums.length; i++) {
      resultados[i][0] = true;
    }
  

    for (let i = 1; i <= nums.length; i++) {
      const currentNum = nums[i - 1]; 
      for (let j = 1; j <= target; j++) {
       
        resultados[i][j] = resultados[i - 1][j];
  
       
        if (j >= currentNum) {
          resultados[i][j] = resultados[i][j] || resultados[i - 1][j - currentNum];
        }
      }
    }
  

    return resultados[nums.length][target];
  }
  
  const nums1 = [3, 34, 4, 12, 5, 2];
  const target1 = 9;
  console.log(`Array: [${nums1}] e Alvo: ${target1}. Subconjunto existe? ${canPartitionSum(nums1, target1)}`); 
  
  const nums2 = [3, 34, 4, 12, 5, 2];
  const target2 = 30;
  console.log(`Array: [${nums2}] e Alvo: ${target2}. Subconjunto existe? ${canPartitionSum(nums2, target2)}`); 
  
  const nums3 = [1, 2, 5, 7];
  const target3 = 8;
  console.log(`Array: [${nums3}] e Alvo: ${target3}. Subconjunto existe? ${canPartitionSum(nums3, target3)}`); 
function isPalindromeBruteForce(s: string): boolean {
    const cleanedString = s.toLowerCase();
    
    const reversedString = cleanedString.split('').reverse().join('');
    
    if (cleanedString === reversedString) {
      return true;
    } else {
      return false; 
    }
  }
  

  console.log(`"arara" é um palíndromo? ${isPalindromeBruteForce("arara")}`); 
  console.log(`"A grama é amarga" é um palíndromo? ${isPalindromeBruteForce("A grama é amarga")}`); 
  console.log(`"hello" é um palíndromo? ${isPalindromeBruteForce("hello")}`); 
  console.log(`"12321" é um palíndromo? ${isPalindromeBruteForce("12321")}`); 
  console.log(`"race a car" é um palíndromo? ${isPalindromeBruteForce("race a car")}`); 
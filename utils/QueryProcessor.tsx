export default function QueryProcessor(query: string): string {

  if (query.toLowerCase().includes("Which of the following numbers is both a square and a cube:")) {
    const matches = query.match(/\d+/g);
    // Convert the matches (which are strings) to actual numbers
    const numbers = matches ? matches.map(Number) : [];
    function isPerfectSquare(n) {
      return Math.sqrt(n) % 1 === 0;
    }
  
    function isPerfectCube(n) {
        return Math.cbrt(n) % 1 === 0;
    }
    
    function numbersThatAreBothSquareAndCube(inputStr) {
        const matches = inputStr.match(/\d+/g);
        if (!matches) return [];
    
        return matches.map(Number).filter(num => {
            for (let i = 1; i <= 18; i++) {
                if (num === i * i && num === i * i * i) {
                    return true;
                }
            }
            return false;
        });
    }

    return (Math.max(...numbers)).toString();
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest:")) {
    const matches = query.match(/\d+/g);
    // Convert the matches (which are strings) to actual numbers
    const numbers = matches ? matches.map(Number) : [];
    return (Math.max(...numbers)).toString();
  }

  if (query.toLowerCase().includes("id")) {
    return (
      "Your Andrew ID is abournes"
    );
  }

  if (query.toLowerCase().includes("name")) {
    return (
      "Rice Cracker"
    );
  }

  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  return "";
}

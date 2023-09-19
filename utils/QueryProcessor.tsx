export default function QueryProcessor(query: string): string {

  function isPrime(n: number) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    
    // Check if divisible by 2 or 3
    if (n % 2 === 0 || n % 3 === 0) return false;
    
    // Check divisors starting from 5
    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
  }

  function extractPrimesFromList(numbers: number[]) {
      return numbers.filter(isPrime);
  }

  if (query.toLowerCase().includes("which of the following numbers are primes:")) {
    const matches = query.match(/\d+/g);
    // Convert the matches (which are strings) to actual numbers
    const numbers = matches ? matches.map(Number) : [];

    return extractPrimesFromList(numbers).toString();
  }

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("multiplied by")) {
    const matches = query.match(/\d+/g);
    // Convert the matches (which are strings) to actual numbers
    const numbers = matches ? matches.map(Number) : [];
    return (numbers[1] * numbers[0]).toString();
  }

  if (query.toLowerCase().includes("which of the following numbers is both a square and a cube:")) {
    const matches = query.match(/\d+/g);
    // Convert the matches (which are strings) to actual numbers
    const numbers = matches ? matches.map(Number) : [];

    function isPerfectSquare(n) {
      return Math.sqrt(n) % 1 === 0;
    }
  
    function isPerfectCube(n) {
        return Math.cbrt(n) % 1 === 0;
    }
    
    const filteredNumbers = numbers.filter(num => isPerfectSquare(num) && isPerfectCube(num));

    if (filteredNumbers.length > 0) {
        return filteredNumbers[0].toString();
    }
  }

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("minus")) {
    const matches = query.match(/\d+/g);
    // Convert the matches (which are strings) to actual numbers
    const numbers = matches ? matches.map(Number) : [];
    return (numbers[0] - numbers[1]).toString();
  }

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("plus")) {
    const matches = query.match(/\d+/g);
    // Convert the matches (which are strings) to actual numbers
    const numbers = matches ? matches.map(Number) : [];
    return (numbers[1] + numbers[0]).toString();
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

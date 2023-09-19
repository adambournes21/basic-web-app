export default function QueryProcessor(query: string): string {

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
      "Your name is Adam"
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

export function add(numbers) {
    if (!numbers) return 0;
  
    let delimiter = /,|\n/;
  
    if (numbers.startsWith('//')) {
      const parts = numbers.split('\n');
      delimiter = new RegExp(parts[0].slice(2));
      numbers = parts[1];
    }
  
    const values = numbers.split(delimiter).map(Number);
    const negatives = values.filter(n => n < 0);
  
    if (negatives.length > 0) {
      throw new Error("Nombres négatifs non autorisés : " + negatives.join(', '));
    }
  
    return values.reduce((sum, n) => sum + n, 0);
  }
  
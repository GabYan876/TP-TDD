export function add(numbers) {
    if (numbers === "") return 0;
  
    const parts = numbers.split(',').map(Number);
    return parts.reduce((sum, n) => sum + n, 0);
  }
  
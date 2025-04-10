export function add(numbers) {
    if (!numbers) return 0;

    let delimiter = /,|\n/;

    if (numbers.startsWith('//')) {
        const parts = numbers.split('\n');
        const customDelimiters = parts[0].slice(2);
        numbers = parts[1];

        if (customDelimiters.startsWith('[') && customDelimiters.endsWith(']')) {
            const delimiterList = customDelimiters
                .slice(1, -1)
                .split('][')
                .map(d => d.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"))
                .join('|');
            delimiter = new RegExp(delimiterList);
        } else {
            delimiter = new RegExp(customDelimiters.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"));
        }
    }

    const values = numbers.split(delimiter).map(Number).filter(n => n <= 1000);

    const negatives = values.filter(n => n < 0);
    if (negatives.length > 0) {
        throw new Error("Nombres négatifs non autorisés : " + negatives.join(', '));
    }

    return values.reduce((sum, n) => sum + n, 0);
}

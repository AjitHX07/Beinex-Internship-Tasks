function calculateSquareRoot(number) {
    if (typeof number !== 'number') {
        throw new Error('Input must be a number.');
    }

    if (number < 0) {
        throw new Error('Square root of negative numbers is not real.');
    }

    return Math.sqrt(number);
}

// eg's
try {
    console.log(calculateSquareRoot(25));
    console.log(calculateSquareRoot(-4)); // Throws error: Square root of negative numbers is not real.
    console.log(calculateSquareRoot('Hello')); // Throws error: Input must be a number.
} catch (error) {
    console.error(error.message);
}

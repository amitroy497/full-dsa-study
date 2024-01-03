// Problem :- Given a natural number 'n', determine if the number is prime or not.

const isPrime = (n) => {
	if (n < 2) {
		return false;
	}
	for (let i = 2; i < n; i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;
};

console.log('isPrime(1) = ', isPrime(1)); //false
console.log('isPrime(5) = ', isPrime(5)); //true
console.log('isPrime(4) = ', isPrime(4)); //false

// The above code contains one for loop.
// Big-O is Linear Time Complexity O(n).
// As the value, of n increases, Line 8 of the code execution also increases.

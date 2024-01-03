// Problem :- Given a natural number 'n', determine if the number is prime or not.

// n=24, a=4 and b=6
// The square root of 24 is 4.89
// 4 is less than 4.89
// a is less than the square root of n.

// n=35, a=5 and b=7
// The square root of 35 is 5.91
// 5 is less than the square root of n

const isPrime = (n) => {
	if (n < 2) {
		return false;
	}
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;
};

console.log('isPrime(1) = ', isPrime(1)); //false
console.log('isPrime(5) = ', isPrime(5)); //true
console.log('isPrime(4) = ', isPrime(4)); //false

// If n=100, we check till n=10.
// If n=10000, we check till n=100

// As the size of n increases, the number of times for loop statement increases, but not in the same proportion.

// This optimized function has Big-O Time Complexity of O(sqrt(n)).

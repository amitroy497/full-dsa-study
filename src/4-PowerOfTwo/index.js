// Problem :- Given a positive integer 'n', determine if the number is a power of 2 or not.

// Pseudocode
// n = 8
// 8/2 = 4 (remainder 0)
// 4/2 = 2 (remainder 0)
// 2/2 = 1 (remainder 0)

// If remainder is not 0 in any step, 'n' is not a power of two.
// If remainder is 0 and 'n' comes down to 1 eventually, n is a power of two.

const isPowerOfTwo = (n) => {
	if (n < 1) {
		return false;
	}
	while (n > 1) {
		if (n % 2 !== 0) {
			return false;
		}
		n = n / 2;
	}
	return true;
};

console.log('isPowerOfTwo(1) = ', isPowerOfTwo(1)); // true
console.log('isPowerOfTwo(2) = ', isPowerOfTwo(2)); // true
console.log('isPowerOfTwo(5) = ', isPowerOfTwo(5)); // false

// Function has 1 while loop, and the n decreased by half in each execution, hence the Big-O Time Complexity is O(log n), i.e., execution increases as n grows but not at the same amount

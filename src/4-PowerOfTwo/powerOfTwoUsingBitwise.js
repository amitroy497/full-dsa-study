// Problem :- Given a positive integer 'n', determine if the number is a power of 2 or not.

// Pseudocode
// In binary, a number that is a power of two, except for 1, ends with 0.
// 1 -> 1
// 2 -> 10
// 3 -> 100
// 4 -> 1000

// Try Bitwise and operator with previous number we will end up with 0

// Bitwise & is 1 if both numbers are 1, else it is 0.

// For all powers of 2 and 1, we can see bitwise operation with the previous number will return 0.

const isPowerOfTwoBitwise = (n) => {
	if (n < 1) {
		return false;
	}
	return (n & (n - 1)) === 0;
};

console.log('isPowerOfTwoBitwise(1) = ', isPowerOfTwoBitwise(1)); // true
console.log('isPowerOfTwoBitwise(2) = ', isPowerOfTwoBitwise(2)); // true
console.log('isPowerOfTwoBitwise(5) = ', isPowerOfTwoBitwise(5)); // false

// Big-O Time Complexity is Constant O(1).

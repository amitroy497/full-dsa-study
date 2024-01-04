// Problem :- Given a number 'n', find the nth element of the Fibonacci sequence.

// Pseudocode
// The Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.

// If F represents a function to calculate the Fibonacci number, then

// Fn = Fn-1 + Fn-2

// Base case
// F0 = 0 and F1 = 1

// F2 = F1 + F0
// F2 = 1 + 0
// F2 = 1

const recursiveFibonacci = (n) => {
	if (n < 2) {
		return n;
	}
	return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};

console.log('recursiveFibonacci(0) = ', recursiveFibonacci(0)); // 0
console.log('recursiveFibonacci(1) = ', recursiveFibonacci(1)); // 1
console.log('recursiveFibonacci(6) = ', recursiveFibonacci(6)); // 8

// Time complexity O(2n) is pretty horrible, hence recursion is not a good solution for fibonacci series problem.

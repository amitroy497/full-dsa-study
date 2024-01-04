// Problem :- Given an integer 'n', find the factorial of that integer.

const recursiveFactorial = (n) => {
	if (n === 0) {
		return 1;
	}
	return n * recursiveFactorial(n - 1);
};

console.log('recursiveFactorial(0) = ', recursiveFactorial(0)); // 1
console.log('recursiveFactorial(1) = ', recursiveFactorial(1)); // 1
console.log('recursiveFactorial(5) = ', recursiveFactorial(5)); // 120

// As n increases, the number instruction increases as the same pace.
// So, Time Complexity of Recursive Factorial is O(n).

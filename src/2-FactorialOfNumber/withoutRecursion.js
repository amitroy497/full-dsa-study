// Problem :- Given an integer 'n', find the factorial of that integer

const factorial = (n) => {
	let result = 1;
	for (let i = 2; i <= n; i++) {
		result = result * i;
	}
	return result;
};

console.log('factorial(0) = ', factorial(0)); // 1
console.log('factorial(1) = ', factorial(1)); // 1
console.log('factorial(5) = ', factorial(5)); // 120

// The above code contains one for loop.
// So using the help of cheat sheet, Big-O is Linear Time Complexity O(n).
// As the value, of n increases, Line 6 of the code execution also increases.

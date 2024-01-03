// Problem :- Given a number 'n', find the first 'n' elements of the Fibonacci sequence

const fibonacci = (n) => {
	let fib = [0, 1];
	for (let i = 2; i < n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2];
	}
	return fib;
};

console.log('fibonacci(2) = ', fibonacci(2));
console.log('fibonacci(3) = ', fibonacci(3));
console.log('fibonacci(5) = ', fibonacci(5));
console.log('fibonacci(7) = ', fibonacci(7));

// The above code contains one for loop.
// Big-O is Linear Time Complexity O(n).
// As the value, of n increases, Line 6 of the code execution also increases.

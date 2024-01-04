// Problem :- Given a staircase of 'n' steps, count the number of distinct ways to climb to the top you can either climb 1 step or 2 steps at a time.

const climbingStaircase = (n) => {
	const noOfWays = [1, 2];
	for (let i = 2; i <= n; i++) {
		noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
	}
	return noOfWays[n - 1];
};

console.log('climbingStaircase(1) = ', climbingStaircase(1)); // 1
console.log('climbingStaircase(2) = ', climbingStaircase(2)); // 2
console.log('climbingStaircase(3) = ', climbingStaircase(3)); // 3
console.log('climbingStaircase(4) = ', climbingStaircase(4)); // 4
console.log('climbingStaircase(5) = ', climbingStaircase(5)); // 5

// Time complexity is O(n).

function hasTargetSum(array, target) {
  const complements = new Set();

  for (const number of array) {
    const complement = target - number;

    if (complements.has(complement)) {
      return true;
    }

    complements.add(number);
  }

  return false;
}


/* 
  Write the Big O time complexity of your function here:
  The time complexity of the hasTargetSum function is O(n), where n is the length of the input array.

This is because the function iterates over the array once, performing constant-time operations for each element. The key operation is checking if a complement exists in the complements set, which has an average time complexity of O(1) for a set data structure.

Therefore, the overall time complexity of the function is linear, as it grows linearly with the size of the input array.
*/

/* 
  Add your pseudocode here:
  function hasTargetSum(array, target):
  create an empty set called complements
  
  for each number in the array:
    calculate the complement by subtracting the number from the target
    
    if the complement exists in the complements set:
      return true
      
    add the number to the complements set
    
  return false

*/

/*
  Add written explanation of your solution here:
  The hasTargetSum function addresses the problem of finding a pair of numbers in an array that adds up to a given target number. The solution utilizes a set data structure to efficiently keep track of the numbers encountered so far.

The function iterates over the array of numbers, one element at a time. For each number, it calculates the complement by subtracting the number from the target value. The complement represents the number that, when added to the current number, would result in the target.

If the complement exists in the complements set, it means a pair of numbers has been found that adds up to the target. In this case, the function immediately returns true.

If the complement is not found in the complements set, the current number is added to the set. This allows future numbers to check if they are a complement for any previously encountered number.

If no pair is found after iterating through the entire array, the function returns false, indicating that no two numbers add up to the target.

The use of a set provides efficient lookup time, making it possible to check for the existence of a complement in O(1) average case time complexity. By iterating over the array once, the function achieves a linear time complexity of O(n), where n is the length of the input array.

Overall, the solution offers an efficient and concise approach to solving the problem by utilizing a set to track complements and performing a single pass over the array to find the target sum pair.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here:
  console.log("Expecting: true");
console.log("=>", hasTargetSum([2, 5, 9, 1, 6], 7));
// Explanation: The array [2, 5, 9, 1, 6] contains the pair (2, 5) which adds up to 7.

console.log("");

console.log("Expecting: true");
console.log("=>", hasTargetSum([-3, -1, 0, 2, 4], 1));
// Explanation: The array [-3, -1, 0, 2, 4] contains the pair (-3, 4) which adds up to 1.

console.log("");

console.log("Expecting: false");
console.log("=>", hasTargetSum([1, 2, 3, 4, 5], 10));
// Explanation: Although the array [1, 2, 3, 4, 5] contains pairs that add up to 10 (e.g., 4 + 6), 
// the target number 10 is not achievable by any pair in this array.

console.log("");

console.log("Expecting: false");
console.log("=>", hasTargetSum([], 5));
// Explanation: The empty array does not contain any elements, so there are no pairs that can add up to 5.

console.log("");

console.log("Expecting: false");
console.log("=>", hasTargetSum([1], 1));
// Explanation: The array [1] contains only one element, so there are no pairs that can be formed.







  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

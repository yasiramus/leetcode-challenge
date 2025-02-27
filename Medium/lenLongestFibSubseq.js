// 873. Length of Longest Fibonacci Subsequence
// Solved
// Medium
// Topics
// Companies
// A sequence x1, x2, ..., xn is Fibonacci-like if:

// n >= 3
// xi + xi+1 == xi+2 for all i + 2 <= n
// Given a strictly increasing array arr of positive integers forming a sequence, return the length of the longest Fibonacci-like subsequence of arr. If one does not exist, return 0.

// A subsequence is derived from another sequence arr by deleting any number of elements (including none) from arr, without changing the order of the remaining elements. For example, [3, 5, 8] is a subsequence of [3, 4, 5, 6, 7, 8].

 

// Example 1:

// Input: arr = [1,2,3,4,5,6,7,8]
// Output: 5
// Explanation: The longest subsequence that is fibonacci-like: [1,2,3,5,8].
// Example 2:

// Input: arr = [1,3,7,11,12,14,18]
// Output: 3
// Explanation: The longest subsequence that is fibonacci-like: [1,11,12], [3,11,14] or [7,11,18].
 

// Constraints:

// 3 <= arr.length <= 1000
// 1 <= arr[i] < arr[i + 1] <= 109


// implementaion

// approach used: HashMap and dynamic programming
function findLongestFibonacciSubsequence(numbers) {
    let maxSequenceLength = 0;
    let sequenceMap = new Map();
    let numberIndexMap = new Map();

    numbers.forEach((num, index) => numberIndexMap.set(num, index));

    for (let currentIndex = 0; currentIndex < numbers.length; currentIndex++) {
        for (let previousIndex = 0; previousIndex < currentIndex; previousIndex++) {
            let firstNumber = numbers[previousIndex];
            let secondNumber = numbers[currentIndex];
            let requiredNumber = secondNumber - firstNumber;

            if (requiredNumber < firstNumber && numberIndexMap.has(requiredNumber)) {
                let requiredIndex = numberIndexMap.get(requiredNumber);
                let sequenceKey = `${previousIndex},${currentIndex}`;
                let previousSequenceKey = `${requiredIndex},${previousIndex}`;
                let previousSequenceLength = sequenceMap.get(previousSequenceKey) || 2;
                sequenceMap.set(sequenceKey, previousSequenceLength + 1);
                maxSequenceLength = Math.max(maxSequenceLength, sequenceMap.get(sequenceKey));
            }
        }
    }
    
    return maxSequenceLength >= 3 ? maxSequenceLength : 0;
}


// approach 2: optimized dynamic programming
// function lenLongestFibSubseq(arr) {
//     const n = arr.length;
//     const dp = Array.from({ length: n }, () => Array(n).fill(0));
//     let maxLen = 0;

//     for (let curr = 2; curr < n; curr++) {
//         let start = 0;
//         let end = curr - 1;

//         while (start < end) {
//             const pairSum = arr[start] + arr[end];

//             if (pairSum > arr[curr]) {
//                 end--;
//             } else if (pairSum < arr[curr]) {
//                 start++;
//             } else {
//                 dp[end][curr] = dp[start][end] + 1;
//                 maxLen = Math.max(dp[end][curr], maxLen);
//                 end--;
//                 start++;
//             }
//         }
//     }

//     return maxLen === 0 ? 0 : maxLen + 2;
// }
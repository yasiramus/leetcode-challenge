// The k-th Lexicographical String of All Happy Strings of Length n

// Question:
// A happy string is a string that:

// consists only of letters of the set ['a', 'b', 'c'].
// s[i] != s[i + 1] for all values of i from 1 to s.length - 1 (string is 1-indexed).
// For example, strings "abc", "ac", "b" and "abcbabcbcb" are all happy strings and strings "aa", "baa" and "ababbc" are not happy strings.

// Given two integers n and k, consider a list of all happy strings of length n sorted in lexicographical order.

// Return the kth string of this list or return an empty string if there are less than k happy strings of length n.

 

// Example 1:

// Input: n = 1, k = 3
// Output: "c"
// Explanation: The list ["a", "b", "c"] contains all happy strings of length 1. The third string is "c".
// Example 2:

// Input: n = 1, k = 4
// Output: ""
// Explanation: There are only 3 happy strings of length 1.
// Example 3:

// Input: n = 3, k = 9
// Output: "cab"
// Explanation: There are 12 different happy string of length 3 ["aba", "abc", "aca", "acb", "bab", "bac", "bca", "bcb", "cab", "cac", "cba", "cbc"]. You will find the 9th string = "cab"
 

// Constraints:

// 1 <= n <= 10
// 1 <= k <= 100

// Approach one; using the backtracking approach 

// Intuition
// In this approach, I use backtracking to simulate the described process and generate all happy strings of n size. To do this, we I build the strings step by step while ensuring they follow the "happy" property.

// We start with an empty string and recursively extend it by adding characters'a','b', or'c', making sure that no two consecutive characters are the same. This means that at each step, I choose a character that is different from the last one in the string. To implement this, I filter over the characters'a','b'and'c'and for each of them we check whether it matches the last character of the string we have constructed so far If so, we skip this character. Otherwise, we add it to the end of the currentString and continue the backtracking by calling generateHappyString(n, "").

// After generating all happy strings of size n, we check if there are at least k of them. If there are, we sort these strings in lexicographical order and return the k 
// th
//  one. Otherwise, we return an empty string to indicate that there are not enough happy strings.
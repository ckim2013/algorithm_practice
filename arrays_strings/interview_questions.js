// 1.1 Is Unique: Implement an algorithm to determine if a string has all unique
// characters. What if you cannot use additional data structures?

// Initial Implimentation:
function isUnique(string) {
  let seen = {};
  for (let i = 0; i < string.length; i++) {
    if (seen[string[i]]) {
      return false;
    } else {
      seen[string[i]] = true;
    }
  }
  return true;
}


// 1.2 Check Permutation: Given two strings, write a method to decide if one
// is a permutation of the other.
// Notes: Ask if it is case sensitive or if whitespaces count. One way
// this could be solved is by using O(n log n) by sorting and comparing.
// Another is similar to below but have only one hash that counts frequency
// of first string. Then in another iteration (for the second string) decrement
// the count in the one hash. If the value drops below zero, for sure it is
// not a permutation. 

// Initial Implementation:
function checkPermutation(stringOne, stringTwo) {
  if (stringOne.length !== stringTwo.length) return false;

  let hashOne = {};
  let hashTwo = {};

  // O(n)
  for (let i = 0; i < stringOne.length; i++) {
    if (hashOne[stringOne[i]]) {
      hashOne[stringOne[i]] += 1;
    } else {
      hashOne[stringOne[i]] = 1;
    }

    if (hashTwo[stringTwo[i]]) {
      hashTwo[stringTwo[i]] += 1;
    } else {
      hashTwo[stringTwo[i]] = 1;
    }
  }

  // O(n)
  for (let i = 0; i < stringOne.length; i++) {
    if (hashOne[stringOne[i]] !== hashTwo[stringOne[i]]) return false;
  }

  return true;
}

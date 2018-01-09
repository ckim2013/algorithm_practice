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

// 1.3 URLify: Write a method to replace all spaces in a string with a '%20'.
// You may assume that the string has sufficient space at the end to hold the
// additional characters, and that you are given the 'true' length of the
// string.
// (Note: If implementing in Java, please use a character array so that you can
// perform this operation in place.)
// Example:
// Input: "Mr John Smith    ", 13
// Output: "Mr%20John%20Smith"

// Initial Implementation:
function URLify(string, length) {
  let result = '';
  for (let i = 0; i < length; i++) {
    if (string[i] === ' ' && string[i+1] !== ' ') {
      result += '%20';
    } else {
      result += string[i];
    }
  }
  return result;
}
// Revisit

// Palindrome Permutation: Given a string, write a function to check if it
// is a permutation of a palindrome. A palindrome is a word or phrase that is
// the same forwards and backwards. A permutation is a rearrangment of letters.
// The palindrome does not need to be limited to just dictionary words.
// Example:
// Input: Tact Coa
// Output: True (permutations: 'taco cat', 'atco cta', etc.)

// Initial Implementation:
function palindromePerm(string) {
  let history = {};

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') continue;

    if (history[string[i].toLowerCase()]) {
      delete history[string[i].toLowerCase()];
    } else {
      history[string[i].toLowerCase()] = true;
    }
  }

  if (Object.keys(history).length < 2) return true;
  return false;
}

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
  let ans = [];
  words.map((word) => {
      let word1 = word;
      let word2 = word.split("").reverse().join("");
      if (word1 === word2) {
          ans.push(word1);
      }
  })
  return ans[0] || ""
};

// The above solution is not efficient. It is not necessary to check all the words in the array. We can return the first palindrome word we find.

var firstPalindrome = function(words) {
  for (const word of words) {
      if (word === word.split("").reverse().join("")) {
          return word;
      }
  }
  return "";
};
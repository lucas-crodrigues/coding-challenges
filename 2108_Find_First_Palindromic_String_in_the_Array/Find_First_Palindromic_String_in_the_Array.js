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
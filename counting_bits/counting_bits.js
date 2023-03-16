/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  let arr = [];
  for(let i = 0; i <= n; i++ ){
      let binary = i.toString(2).split('');
      let onesCount = binary.filter(x => x==1).length;
      arr.push(onesCount);
  }
  return arr;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let node = head
  let nodeCount = 0
  let arr = [];
  let star;
  while (node !== null) {
      nodeCount++
      arr.push(node)
      node = node.next
  }
  if (nodeCount % 2 === 0) {
      star = (nodeCount / 2) + 1
  } else {
      star = Math.ceil(nodeCount/2)
  }
  return arr[star - 1]
};

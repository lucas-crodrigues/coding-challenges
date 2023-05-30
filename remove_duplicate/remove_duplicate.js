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
var deleteDuplicates = function(head) {
  let node = head;
  let helperNode;
  while(node){
      helperNode = node.next
      while(helperNode && helperNode.val === node.val){  
          helperNode = helperNode.next
      }
      node.next = helperNode    
      node = node.next
  }
  return head
};

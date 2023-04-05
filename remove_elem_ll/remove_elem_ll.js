var removeElements = function(head, val) {
  let node  = head;
  let helperNode;
  while(node !== null){
      helperNode = node.next
      while(helperNode && helperNode.val === val){
          
          helperNode = helperNode.next
      }
      node.next = helperNode    
      node = node.next
      
  }
  
  if(head === null){
      return head
  }
  else if(head.val === val){
      head = head.next
  }
  
  
  return head
};

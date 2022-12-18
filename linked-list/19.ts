import { GenerateNode, ListNode, NodeToArray } from "./utils.js";

/** 19. Remove Nth Node From End of List */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const arr = NodeToArray(head);
    arr.splice(arr.length - n, 1);

    return GenerateNode(arr);
};


// example
console.log(removeNthFromEnd(GenerateNode([1,2,3,4,5]), 2)); //  [1,2,3,5]
console.log(removeNthFromEnd(GenerateNode([1]), 1)); // []
console.log(removeNthFromEnd(GenerateNode([1,2]), 1)); // [1]

// test
// console.log(removeNthFromEnd(GenerateNode([1,2,3,4,5]), 5)); //  [2,3,4,5]
// console.log(removeNthFromEnd(GenerateNode([3,7,9,3,5,8,0]), 1)); //  [3,7,9,3,5,8]

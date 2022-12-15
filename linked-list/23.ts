/** 23. Merge k Sorted Lists */
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { GenerateNode, ListNode } from "./utils.js";
import { mergeTwoLists } from "./21.js";

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    // console.log(lists);
    // if(lists.length === 0){
    //     return null;
    // }
    const trueList = lists.filter(x => x)
    if(trueList.length === 0){
        return null;
    }

    let reduce: ListNode | null = null;
    for(let i = 0; i < trueList.length; i++){
        // console.log('reduce: ');
        // console.log(reduce);
        reduce = mergeTwoLists(reduce, trueList[i]);
    }
    
    return reduce;
};


console.log(mergeKLists([
    GenerateNode([1,4,5]),
    GenerateNode([1,3,4]),
    GenerateNode([2,6])
]));

console.log(mergeKLists([]));
console.log(mergeKLists([GenerateNode([])]));
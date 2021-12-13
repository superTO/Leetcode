import { ListNode } from "./utils";
/** 141. Linked List Cycle */
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

/** Follow up space complexity O(1) */
/**
 * 1. Use two pointers, walker and runner.
 * 2. walker moves step by step. runner moves two steps at time.
 * 3. if the Linked List has a cycle walker and runner will meet at some point.
 */
function hasCycle(head: ListNode | null): boolean {
    if(!head || !head.next) return false;
    let slow = head, fast = head;
    while(slow?.next && fast?.next?.next){
        slow = slow.next;
        fast = fast.next?.next;
        if(slow === fast) return true;
    }
    return false;
};

// function hasCycle(head: ListNode | null): boolean {
//     if(!head || !head.next) return false;
//     const dp = new Set();
    
//     while(head){
//         if(dp.has(head)) return true;

//         dp.add(head);
//         head = head.next;
//     }
//     return false;
// };
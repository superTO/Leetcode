import { GenerateNode, ListNode } from "./utils";
/** 206. Reverse Linked List */
/**
 * Definition for singly-linked list.
 */

/** new ListNode() 在 leetcode 上會 Run error */
// function reverseList(head: ListNode | null): ListNode | null {
//     if(!head) return null;

//     const data = [];
//     while(head !== null){
//         data.push(head.val);
//         head = head.next ? head.next : null;
//     }
//     // console.log(data);
//     return GenerateNode(data.reverse());
// };

/** recursive */
function reverseList(head: ListNode | null): ListNode | null {
    return recursive(head, null);
};

function recursive(cur: ListNode | null, prev: ListNode | null): ListNode | null{
    if(!cur) return cur;

    if(!cur.next) {
        cur.next = prev;
        return cur;
    }

    const tempNext = cur.next;
    cur.next = prev;

    return recursive(tempNext, cur)
}

/** Other Solution */
// function reverseList(head: ListNode | null): ListNode | null {
//     let [prev, current] = [null, head]
//     while(current) {
//         [current.next, prev, current] = [prev, current, current.next]
//     }
//     return prev
// }

/** test case */
const case1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))));
console.log(reverseList(case1));
console.log(reverseList(GenerateNode([1,2])));
console.log(reverseList(GenerateNode([])));

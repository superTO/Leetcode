import { GenerateNode, ListNode } from "./utils.js";

/** 21. Merge Two Sorted Lists */
export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if(!list1) return list2;
    if(!list2) return list1;

    if(list1.val < list2.val){
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
    else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};

/** This is a Linked List merge question, not a regular array merging. */
// function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
//     if(!list1) return list2;
//     if(!list2) return list1;

//     const data = [...list(list1), ...list(list2)];

//     data.sort((a, b) => a-b);

//     return GenerateNode(data);
// };

// function list(list: ListNode): number[]{
//     const data = [];
//     while(list){
//         data.push(list.val);
//         list = list.next
//     }
//     return data;
// }

/** test case */
console.log(mergeTwoLists(GenerateNode([1,2,4]), GenerateNode([1,3,4])));
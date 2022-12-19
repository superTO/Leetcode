import { GenerateNode, ListNode, NodeDeepLength } from "./utils.js";

/** 143. Reorder List */
function reorderList(head: ListNode | null): void {
    if(head === null){
        return;
    }

    let insertNode = FindMiddle(head);
    let reverseNode = ReverseListNode(insertNode?.next);
    insertNode.next = null;

    while(reverseNode){
        [head.next, head, reverseNode] = [reverseNode, reverseNode, head.next];
    }
    
};

function FindMiddle(head: ListNode | null): ListNode {
    let [oneStep, twoStep] = [head, head];

    while(twoStep && twoStep.next){
        oneStep = oneStep?.next;
        twoStep = twoStep.next.next;
    }

    return oneStep;
}

// reverse insertNode
function ReverseListNode(head: ListNode | null): ListNode | null{
    let prev: ListNode | null = null;
    while(head){
        [head.next, head, prev] = [prev, head.next, head];
    }

    return prev;
}

// example
reorderList(GenerateNode([1,2,3,4])); // [1,4,2,3]
reorderList(GenerateNode([1,2,3,4,5])); // [1,5,2,4,3]
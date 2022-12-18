export function GenerateNode(data: number[]): ListNode | null{
    let result: ListNode[] = [];

    for(let item of data){
        result.push(new ListNode(item));
    }

    for(let i = 0; i < result.length; i++){
        const temp = result[i+1];
        result[i].next = temp ? temp : null;
    }

    return result[0] ? result[0] : null;
}

export function NodeToArray(node: ListNode | null): number[] {
    const arr: number[] = [];
    while(node){
        if(node.val || node.val === 0){
            arr.push(node.val);
            node = node.next;
        } else {
            node = null;
        }
    }
    return arr;
}

export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
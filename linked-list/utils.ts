export function GenerateNode(data: number[]): ListNode | null{
    let result: ListNode[] = [];

    for(let item of data){
        result.push(new ListNode(item));
    }

    let i = 0;
    while(i < result.length){
        result[i].next = result[++i];
    }

    return result[0];
}

export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
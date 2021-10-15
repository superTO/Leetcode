/** 133. Clone Graph */
export class Node {
    val: number;
    neighbors: Node[];
    constructor(val?: number, neighbors?: Node[]) {
        this.val = (val === undefined ? 0 : val)
        this.neighbors = (neighbors === undefined ? [] : neighbors)
    }
}


/** DFS */
// function cloneGraph(node: Node | null): Node | null {
//     if(node === null) return null;
    
//     return clone(node, new Map<number, Node>());
// };

// function clone(node: Node, dp: Map<number, Node>): Node | null{
//     console.log(node)
//     if(!dp.has(node.val)){
//         const temp = new Node(node.val);
//         dp.set(node.val, temp);
//         temp.neighbors = node.neighbors.map(x => clone(x, dp))
//     }
    
//     return dp.get(node.val);
// }

/** BFS */
function cloneGraph(node: Node | null): Node | null {
    if(node === null) return null;
    
    return bfs(node, new Map<number, Node>());
};

function bfs(node: Node, dp: Map<number, Node>): Node | null{
    if(dp.has(node.val)){
        return dp.get(node.val);
    }
    
    const temp = new Node(node.val);
    dp.set(node.val, temp);
    temp.neighbors = node.neighbors.map(x => bfs(x, dp))

    return bfs(node, dp)
}


/** test case */
/** 沒辦法在local測試 */
// console.log(cloneGraph([[2, 4], [1, 3], [2, 4], [1, 3]])); // [[2,4],[1,3],[2,4],[1,3]]
// console.log(cloneGraph([[]])); // [[]]
// console.log(cloneGraph([])); // []
// console.log(cloneGraph([[2],[1]])); // [[2],[1]]
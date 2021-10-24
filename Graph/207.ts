/** 207. Course Schedule */
/**
 * 這題在考 Topological Sort 
 * *** 只有directed acyclic graph(DAG)的Topological Sort才有意義 ***
 * 
 * 在DAG上執行一次DFS()，若存在一條path從vertex(X)到vertex(Y)，那麼finish[X]一定比finish[Y]還大
 * [證明](https://www.personal.kent.edu/~rmuhamma/Algorithms/MyAlgorithms/GraphAlgor/topoSort.htm)
 * 
 * 因此只要進行一次DFS()，並且依照finish[]由大到小印出vertex，就是Topological Sort。
 */

/**
 * @param {number} numCourses 課堂數
 * @param {number[][]} prerequisites 擋修限制
 * @returns {boolean}
 */
/** Topological Sort */
// function canFinish(numCourses: number, prerequisites: number[][]): boolean {

//     // adjList [[], [], []]
//     const adjList = new Array(numCourses).fill(0).map(() => []);
//     // inDegree [0,0,0]
//     const inDegree = new Array(numCourses).fill(0);

//     for(let [course, preCourse] of prerequisites){
//         ++inDegree[course];
//         adjList[preCourse].push(course);
//     }

//     // console.log(adjList);
//     // console.log(inDegree);

//     const queue = [];
//     for(let i = 0; i < inDegree.length; ++i){
//         if(inDegree[i] === 0) queue.push(i);
//     }

//     // console.log(queue);

//     let count = 0;
//     while(queue.length > 0){
//         let node = queue.shift();
//         ++count;
//         for(let v of adjList[node]){
//             --inDegree[v];
//             if(inDegree[v] === 0){
//                 queue.push(v);
//             }
//         }
//     }

//     return count === numCourses;
// };

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    // adjList [[], [], []]
    const adjList = new Array(numCourses).fill(0).map(() => []);
    
    for(let [course, preCourse] of prerequisites){
        adjList[preCourse].push(course);
    }

    const visited = new Array(numCourses).fill(0);

    const isCircle = (index , visitedStatus) => {
        if(visitedStatus[index] === 1) return true; //visiting
        if(visitedStatus[index] === 2) return false; //visited
        
        visitedStatus[index] = 1;
        
        if(adjList[index]){
            for(let postCourse of adjList[index]){
                if(isCircle(postCourse , visitedStatus)) return true;
            }   
        }
        
        visitedStatus[index] = 2;
    }

    for(let i = 0 ; i < numCourses ; i++){
        if(isCircle(i , visited)) return false;
    }

    return true;
};


/** test case */
console.log(canFinish(2, [[1,0]])); //true
console.log(canFinish(2, [[1,0], [0,1]])); //false
console.log(canFinish(3, [[1,0], [1,2]])); //true
console.log(canFinish(4, [[1,0], [2,1], [3,2]])); //true

console.log(canFinish(20, [[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]])); //false
console.log(canFinish(3 ,[[0,1],[0,2],[1,2]])); //true
console.log(canFinish(3, [[0,2],[1,2],[2,0]])); //false
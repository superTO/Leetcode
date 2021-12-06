/** 56. Merge Intervals */
function merge(intervals: number[][]): number[][] {
    if(intervals.length === 0) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);

    const result = [];
    let [s,e] = intervals[0];
    
    for(let val of intervals){
        if(val[0] <= e){
            e = Math.max(e, val[1]);
        } else {
            result.push([s,e]);
            [s,e] = val;
        }
    }
    result.push([s,e])
    return result;
};

/** test case */
console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // [[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]])); // [[1,5]]

console.log(merge([[1,4],[5,10]])); // [[1,4],[5,10]]
console.log(merge([[1,3],[2,9],[8,10],[15,18]])); // [[1,10],[15,18]]
console.log(merge([[1,3],[4, 5],[5,16],[15,18]])); // [[1,3], [4,18]]
console.log(merge([[1,3],[4, 5],[6,16],[15,18]])); // [[1,3], [4, 5], [6, 18]]
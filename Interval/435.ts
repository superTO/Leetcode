/** 435. Non-overlapping Intervals */

/** space complexity O(1) */
function eraseOverlapIntervals(intervals: number[][]): number {
    if(intervals.length === 0) return 0;
    
    intervals.sort((a, b) => a[0] - b[0]);
    let count = -1, e = intervals[0][1];

    for(let i of intervals){
        if(i[0] < e){
            ++count;
            e = Math.min(e, i[1])
        } else {
            e = i[1];
        }
    }

    return count;
};

/** test case */
console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])); // 1
console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]])); // 2
console.log(eraseOverlapIntervals([[1,2],[2,3]])); // 0

console.log(eraseOverlapIntervals([[1,2],[2,3],[2,4],[1,3]])); // 2
console.log(eraseOverlapIntervals([[1,3],[2,3],[2,4],[1,3]])); // 3
console.log(eraseOverlapIntervals([[1,100],[11,22],[1,11],[2,12]])); // 3

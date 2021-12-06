/** 57. Insert Interval */
/**
 *
 * @param {number[][]} intervals 
 * @param {number[]} newInterval newInterval.length === 2
 * @returns {number[][]}
 */
function insert(intervals: number[][], newInterval: number[]): number[][] {
    let [s , e] = newInterval, result: number[][] = [];
    let i = 0;
    // push unchange intervals (< s)
    while(i < intervals.length && intervals[i][1] < s){
        result.push(intervals[i++]);
    }
    // 剩下 intervals[i][1] > s, 並從中找出 intervals[i][0] <= e 的項目
    while(i < intervals.length && intervals[i][0] <= e){
        s = Math.min(s, intervals[i][0]);
        e = Math.max(e, intervals[i][1]);
        ++i;
    }

    result.push([s, e]);

    // push unchange intervals (> e)
    while(i < intervals.length){
        result.push(intervals[i++]);
    }

    return result;
};

/** test case */
insert([[1,3],[6,9]], [2, 5]); // [[1,5],[6,9]]
insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4, 8]); // [[1,2],[3,10],[12,16]]
insert([], [5, 7]); // [[5, 7]]
insert([[1, 5]], [2, 3]); // [[1,5]]

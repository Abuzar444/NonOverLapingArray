var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let count_remove = 0;
    let j = 0;
    for (let i = 1; i < intervals.length; i++) {
        let next_start = intervals[i][0];
        let next_end = intervals[i][1];
        let current = intervals[j][1];
        if (current > next_start) {
            count_remove++;
            if (next_end < current) {
                j = i;
            }
        } else {
            j = i;
        }
    }
    return count_remove;
};

console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]))
// The Result should be 1
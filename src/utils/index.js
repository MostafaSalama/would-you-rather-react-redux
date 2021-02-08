/**
 * Sort Question by time stamp
 * @param {[]} questions
 */
export function sortByTimeStamp(questions) {
    console.log(questions);
    const res = questions.sort((a, b) => {
        return b.timestamp - a.timestamp;
    });
    console.log(res);
    return res;
}
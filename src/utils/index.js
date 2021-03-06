/**
 * Sort Question by time stamp
 * @param {[]} questions
 */
export function sortByTimeStamp(questions) {
    const res = questions.sort((a, b) => {
        return b.timestamp - a.timestamp;
    });
    return res;
}
export function getAnsweredQuestion(question){
    if (!question) {
        return  null;
    }
    const optionOneVotes = question.optionOne.votes.length
    const optionTwoVotes = question.optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes ;
    const optionOnePercentage = ((optionOneVotes / totalVotes) * 100).toFixed(1);
    const optionTwoPercentage = ((optionTwoVotes / totalVotes) * 100).toFixed(1);
    return {
        ...question, optionOneVotes, optionTwoVotes,
        totalVotes, optionOnePercentage, optionTwoPercentage
    };
}
import React, {useState} from "react";
import {useParams} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import useQuestionsWithAvatars from "../../hooks/useQuestionsWithAvatars";
import {saveQuestionAnswer} from "../../store/reducers";
import useAuth from "../../hooks/useAuth";
import {useDispatch} from "react-redux";
import {getAnsweredQuestion} from "../../utils";

function QuestionViewItem({id}) {
    const [selectedAnswer, updateSelectedAnswer] = useState('');
    const history = useHistory();
    const {authUser} = useAuth();
    const dispatch = useDispatch();
    const allQuestions = useQuestionsWithAvatars();
    const question = allQuestions.find(q => q.id === id);

    const [isAnswered, setIsAnswered] = useState(
        Object.keys(authUser.answers).includes(question? question.id : null)
    );
    const [answeredOption, updateAnsweredOption] =
        useState(isAnswered ? authUser.answers[question ? question.id : null]: '');
    const [updatedQuestion, setUpdatedQuestion] =
        useState(isAnswered ? getAnsweredQuestion(question) : question);




    const onSelectionChange = (e) => {
        updateSelectedAnswer(e.target.value);
    }
    const saveAnswer = () => {
        if (selectedAnswer) {
            dispatch(saveQuestionAnswer({
                authedUser: authUser.id,
                qid: question.id,
                answer: selectedAnswer
            })).then((newQuestion) => {
                setIsAnswered(true);
                updateAnsweredOption(selectedAnswer);
                const updatedQuestion = getAnsweredQuestion(newQuestion);
                setUpdatedQuestion(updatedQuestion);
            })
        }
    }
    return (
        <div className="flex">
            <div className="w-300 2-300  question-container">
                <div className="question-author-container">
                    <div className="question-image">
                        <img src={question.avatarURL} alt={question.author}/>
                    </div>
                    <div className="question-author-title">
                        <p>{question.author}</p>
                    </div>
                </div>

                {!isAnswered &&
                <div className='options'>
                    <div className="question">
                        <h2 className="title">Would You Rather</h2>
                    </div>
                    <div className="answers">
                        <label>
                            <input type='radio' value='optionOne'
                                   name='options'
                                   checked={selectedAnswer === 'optionOne'}
                                   onChange={onSelectionChange}
                            />
                            {question.optionOne.text}
                        </label>
                        <label>
                            <input type='radio' value='optionTwo'
                                   name='options'
                                   checked={selectedAnswer === 'optionTwo'}
                                   onChange={onSelectionChange}
                            />
                            {question.optionTwo.text}
                        </label>
                    </div>
                    <div>
                        <button className='btn btnPrimary' onClick={saveAnswer}>Submit</button>
                    </div>
                </div>
                }

                {
                    isAnswered &&
                    <div className='votes'>
                        <h2 className='title'>Results</h2>
                        <div className={`option optionOne ${answeredOption === 'optionOne' ? 'active' :'' }`}>
                            <p>Would You Rather {updatedQuestion.optionOne.text}</p>
                            <label>
                                {updatedQuestion.optionOnePercentage}%
                                <progress max='100'
                                          value={updatedQuestion.optionOnePercentage}>{updatedQuestion.optionOnePercentage}</progress>
                            </label>
                            <p>{updatedQuestion.optionOneVotes} out of {updatedQuestion.totalVotes}</p>
                        </div>
                        <div
                            className={`option optionTwo ${answeredOption === 'optionTwo' ? 'active' :'' }` }
                        >
                            <p>Would You Rather {updatedQuestion.optionTwo.text}</p>
                            <label>
                                {updatedQuestion.optionTwoPercentage}%
                                <progress max='100'
                                          value={updatedQuestion.optionTwoPercentage}>{updatedQuestion.optionTwoPercentage}</progress>
                            </label>
                            <p>{updatedQuestion.optionTwoVotes} out of {updatedQuestion.totalVotes}</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default QuestionViewItem;
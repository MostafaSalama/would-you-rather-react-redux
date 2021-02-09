import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import styles from './AddQuestionForm.module.css';
import useAuth from '../../hooks/useAuth';
import {saveQuestion} from '../../store/reducers';
import {useDispatch} from 'react-redux';

const AddQuestionForm = () => {
    const [optionOneText, setOptionOne] = useState('');
    const [optionTwoText, setOptionTwo] = useState('');
    const dispatch = useDispatch();
    const {authUser} = useAuth();
    const history = useHistory();

    function addNewQuestion() {

        if (optionOneText && optionTwoText) {
            dispatch(saveQuestion({
                author: authUser.id,
                optionOneText,
                optionTwoText,
            })).then(() => {
                history.push('/');
            })
        }
    }

    return (
        <div className={styles.newQuestion}>
            <div>
                <h3>Would You Rather</h3>
            </div>
            <div>
                <input
                    type="text"
                    name="optionOneText"
                    placeholder="option one"
                    value={optionOneText}
                    onChange={(e) => setOptionOne(e.target.value)}
                />
                <input
                    type="text"
                    name="optionTwoText"
                    placeholder="option two"
                    value={optionTwoText}
                    onChange={(e) => setOptionTwo(e.target.value)}
                />
                <button className="btn" onClick={addNewQuestion}>
                    Submit Question
                </button>
            </div>
        </div>
    );
};
export default AddQuestionForm;

import React from "react";
import {useParams} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import useQuestionsWithAvatars from "../hooks/useQuestionsWithAvatars";
import QuestionViewItem from "../components/QuestionViewItem";

function QuestionView() {
    const {id} = useParams();
    const history = useHistory();
    const allQuestions = useQuestionsWithAvatars();
    const question = allQuestions.find(q => q.id === id);
    // redirect to 404 page
    if (!question) {
         history.push('/404');
    }

    return (
        <QuestionViewItem id={id}/>
    )
}

export default QuestionView;
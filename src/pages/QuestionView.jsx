import React from "react";
import {useParams} from 'react-router-dom';
function QuestionView() {
    const { id } = useParams();
    return (
        <div>
            <h1>Welcome to view question</h1>
            <h2>{id}</h2>
        </div>
    )
}
export default QuestionView;
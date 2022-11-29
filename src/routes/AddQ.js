import React, { useRef, useState } from "react";
import { dbService } from "../myBase";

const AddQ = () => {
    const [questions, setQuestions] = useState(['a','b','c']);
    const nextQuestion = useRef(1);

    const onChange = (index) => {
        let tmp = questions[index];
    };

    return (
        <div>
            {questions.map((question, index) => {
            return(<div>
                문제{index+1}:
                <input onChange={onChange(index)} value={question}/>
            </div>)})}
        </div>
    );
};

export default AddQ;
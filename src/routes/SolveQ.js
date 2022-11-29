import React, { useEffect, useState } from "react";
import { dbService } from "../myBase";

const SolveQ = () => {
    const [questions, setQuestions] = useState([]);
    const getQuestions = async() => {
        const dbQuestions = await dbService.collection("questions").get();
        dbQuestions.forEach((document) => {
            const questionObject = { ...document.data(), id:document.id, };
            setQuestions((prev) => [questionObject, ...prev]);
        });
    };
    useEffect(()=> {
        getQuestions();
    }, []);
    return (
        <span>
            <div>
                {questions.map(question => <div key={question.id}>
                    <h4>{question.question}</h4>
                </div>)}
            </div>
        </span>
    );
};

export default SolveQ;
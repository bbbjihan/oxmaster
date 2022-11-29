import React, { useRef, useState } from "react";
import { dbService } from "../myBase";

const AddQ = () => {
    const [question, setQuestion] = useState(['']);
    const nextQuestion = useRef(1);
    const onSubmit = async(event) => {
        event.preventDefault();
        await dbService.collection("questions").add({
            question,
            createdAt: Date.now(),
        })
        setQuestion(['']);
    };
    const onReset = () => {
        setQuestion(['']);
    };
    const onChange = (event) => {
        const {target:{value}} = event;
        setQuestion(value);
    };

    const addQuestion = () => {
        setQuestion(question.concat(''));
        nextQuestion.current += 1;
    };
    const deleteQuestion = () => {
        if(question.length>1){
            let tmp = question;
            tmp.pop();
            setQuestion(tmp);
            nextQuestion.current -= 1;
        }
    }
    
    return (
        <div>
            <form onSubmit={onSubmit} onReset={onReset}>
                {
                    question.map(() =>{
                        return(<div>Hi</div>);
                    })
                }
                문제: 
                <input value={question} onChange={onChange} type="text" placeholder="문제를 작성해주세요!" maxLength={120}/><br/>
                <input type="submit" value="문제 출제" />
                <input type="reset" value="초기화"/>
            </form>
            <button onClick={addQuestion}>+</button><button onClick={deleteQuestion}>-</button>{nextQuestion.current}
        </div>
    );
};

export default AddQ;
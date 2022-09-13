import React, { useState } from "react";

const AddQ = () => {
    const [question, setQuestion] = useState("");
    const onSubmit = (event) => {
        event.preventDefault();
    };
    const onChange = (event) => {
        const {target:{value}} = event;
        setQuestion(value);
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={question} onChange={onChange} type="text" placeholder="문제를 작성해주세요!" maxLength={120}/>
                <input type="submit" value="문제 출제" />
            </form>
        </div>
    );
};

export default AddQ;
import React, {useState} from 'react';
import {FullInput} from "./components/FullInput";
import {Button} from "./components/Button";
import {Input} from "./components/Input";

export const Microtask3 = () => {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    let [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
        setTitle('')
    }

    const callBackButtonHandler = () => {
        addMessage(title)
    }

    return (
        <div>
            {/*<FullInput addMessage={addMessage} />*/}
            <Input setTitle={setTitle} title={title} />
            <Button name={'+'} callBack={callBackButtonHandler} />

            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
};

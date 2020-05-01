import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>

    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }



}

export default Message;
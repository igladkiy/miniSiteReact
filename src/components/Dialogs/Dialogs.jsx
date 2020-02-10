import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let state = props.dialogPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = state.messages.map(m => <Message message={m.message} />)

    let editMessage = React.createRef();

    let onMessageChange = () => {
    let sms = editMessage.current.value;
    props.updateNewMessageBody(sms);
    }


    let addNewMessage = () => {
        props.sendMessage();
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={editMessage} value={state.newMessage} placeholder='Enter your massage here' onChange={onMessageChange} ></textarea>
                <button onClick={addNewMessage}>Add message</button>

                </div>
        </div>
    )
}

export default Dialogs;
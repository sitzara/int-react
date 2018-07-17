import React, { Component } from 'react';


export default class ChatMessage extends Component {
    render() {
        const { message } = this.props;
        const { text, userName } = message;

        return (
            <div className={'task-chatmessage'}>
                <span className="task-chatmessage__user-name">{userName}:</span> {text}
            </div>
        );
    }
}

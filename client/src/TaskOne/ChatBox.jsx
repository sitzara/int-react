import React, { PureComponent } from 'react';
import ChatMessage from './ChatMessage';


export default class ChatBox extends PureComponent {
    renderMessage(message, key) {
        return (
            <ChatMessage key={key} message={message} />
        );
    }

    render() {
        const { messages } = this.props;

        return (
            <div className={'task-1-chatbox'}>
                {messages.map(this.renderMessage)}
            </div>
        );
    }
}

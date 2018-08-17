import React, { PureComponent } from 'react';
import ChatMessage from './ChatMessage';


export default class ChatBox extends PureComponent {
    componentDidMount() {
        this.box.scrollTop = 9999999;
    }

    componentDidUpdate() {
        this.box.scrollTop = 9999999;
    }

    renderMessage(message, key) {
        const { id } = message;

        return (
            <ChatMessage key={key} id={id} message={message} />
        );
    }

    render() {
        const { messages } = this.props;

        return (
            <div
                className="task-chatbox"
                ref={box => { this.box = box; }}>
                {messages.length === 0 && <div>No messages</div>}
                {messages.map(this.renderMessage)}
            </div>
        );
    }
}

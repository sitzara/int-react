import React, { PureComponent } from 'react';


export default class ChatMessage extends PureComponent {
    render() {
        const { message } = this.props;
        const { text } = message;

        return (
            <div className={'task-1-chatmessage'}>
                {text}
            </div>
        );
    }
}

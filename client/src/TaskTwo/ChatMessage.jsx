import React, { Component } from 'react';


export default class ChatMessage extends Component {
    shouldComponentUpdate(nextProps) {
        return this.props.id !== nextProps.id;
    }

    // componentDidMount() {
    //     console.log('MOUNT');
    // }

    render() {
        const { message } = this.props;
        const { text, userName } = message;
        // console.log('RENDER');

        return (
            <div className={'task-chatmessage'}>
                <span className="task-chatmessage__user-name">{userName}:</span> {text}
            </div>
        );
    }
}

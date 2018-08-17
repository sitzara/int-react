import React, { Component } from 'react';


const userInfo = Array(10).fill(0);

export default class ChatMessage extends Component {
    shouldComponentUpdate(nextProps) {
        return this.props.id !== nextProps.id;
    }

    renderUserInfo(i, key) {
        return <div key={key}></div>;
    }

    render() {
        const { message } = this.props;
        const { text, userName } = message;

        return (
            <div className={'task-chatmessage'}>
                <span className="task-chatmessage__user-name">{userName}:</span> {text}
                {this.renderUserInfo()}
                {userInfo.map(this.renderUserInfo)}
            </div>
        );
    }
}

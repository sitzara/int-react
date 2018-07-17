import React, { Component } from 'react';
import faker from 'faker';
import uuidv4 from 'uuid/v4';
import fetchMessages from 'helpers/fetchMessages';
import ChatBox from './ChatBox';


export default class TaskOne extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            inputValue: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const messages = fetchMessages(10);
        this.setState({ messages });
    }

    handleChange(e) {
        const value = e.currentTarget.value;
        this.setState({ inputValue: value });
    }

    handleClick() {
        const { inputValue, messages } = this.state;
        messages.push({ id: uuidv4(), text: inputValue, userName: 'You' });

        this.setState({
            inputValue: '',
            messages,
        });
    }

    render() {
        const { inputValue, messages } = this.state;

        return (
            <div className={'task'}>
                <ChatBox messages={messages} />
                <div className="task-controls">
                    <input
                        className="task-input"
                        ref={input => { this.input = input; }}
                        value={inputValue}
                        onChange={this.handleChange}
                    />
                    <button className="task-button" onClick={this.handleClick}>send</button>
                </div>
            </div>
        );
    }
}

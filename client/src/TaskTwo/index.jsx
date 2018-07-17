import React, { Component } from 'react';
import faker from 'faker';
import uuidv4 from 'uuid/v4';
import ChatBox from './ChatBox';
import './styles';


export default class TaskTwo extends Component {
    constructor(props) {
        super(props);

        const messages = [...(Array(100000))]
            .map(() => ({ id: uuidv4(), text: faker.lorem.sentence() }));

        this.state = {
            messages,
            inputValue: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        const value = e.currentTarget.value;
        this.setState({ inputValue: value });
    }

    handleClick() {
        const { inputValue, messages } = this.state;

        this.setState({
            inputValue: '',
            messages: [...messages, { id: uuidv4(), text: inputValue }],
        });
    }

    render() {
        const { inputValue, messages } = this.state;

        return (
            <div className={'task-1'}>
                <ChatBox messages={messages} />
                <input value={inputValue} onChange={this.handleChange} />
                <button onClick={this.handleClick}>send</button>
            </div>
        );
    }
}

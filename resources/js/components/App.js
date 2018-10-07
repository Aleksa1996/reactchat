import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';

import Layout from './Pages/Layout';

import ReactDOM from 'react-dom';

export const StoreContext = React.createContext({});

export default class App extends Component {
    constructor(props) {
        super(props);

        this.socket = new WebSocket('ws://reactchat.com/ws-server');
        this.socket.onopen = e => console.log('Connected!');

        this.sendMessage = e => {
            e.preventDefault();
            if (this.state.message.length <= 0) return;
            this.socket.send(this.state.message);
            this.setState(prevState => {
                return { messages: [...prevState.messages, { sentByMe: true, text: prevState.message }], message: '' };
            });
        };

        this.handleMessageChange = e => {
            this.setState({ message: e.target.value });
        };

        this.state = {
            message: '',
            messages: [],
            sendMessage: this.sendMessage,
            handleMessageChange: this.handleMessageChange
        };
    }

    componentDidMount() {
        this.socket.onmessage = e => {
            this.setState(prevState => {
                return { messages: [...prevState.messages, { sentByMe: false, text: e.data }] };
            });
        };
    }

    render() {
        return (
            <StoreContext.Provider value={this.state}>
                <Router>
                    <Layout />
                </Router>
            </StoreContext.Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('reactApp'));

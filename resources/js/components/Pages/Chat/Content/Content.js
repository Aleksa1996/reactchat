import React, { Component } from 'react';

import Contact from './Contact/Contact';
import Messages from './Messages/Messages';
import MessageInput from './MessageInput';

class Content extends Component {
    state = {};
    render() {
        return (
            <div className="content">
                <Contact />
                <Messages />
                <MessageInput />
            </div>
        );
    }
}

export default Content;

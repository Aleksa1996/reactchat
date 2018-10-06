import React, { Component } from 'react';

import Sidepanel from './Sidepanel/Sidepanel';
import Content from './Content/Content';

class Chat extends Component {
    state = {};
    render() {
        return (
            <div className="chat-container">
                <div id="frame">
                    <Sidepanel />
                    <Content />
                </div>
            </div>
        );
    }
}

export default Chat;

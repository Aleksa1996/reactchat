import React, { Component } from 'react';
import { v4 } from 'uuid';
import { withStore } from '../../../../Hocs/storeHoc';

class Messages extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.store.messages.length !== prevProps.store.messages.length) {
            $('.messages').animate({ scrollTop: $(document).height() }, 'fast');
        }
    }
    render() {
        const {
            store: { messages }
        } = this.props;
        return (
            <div className="messages">
                <ul className="p-0">
                    {messages.map(m => (
                        <li key={v4()} className={m.sentByMe ? 'sent' : 'replies'}>
                            <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
                            <p>{m.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default withStore(Messages);

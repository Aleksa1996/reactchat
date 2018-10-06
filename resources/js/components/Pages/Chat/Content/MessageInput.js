import React from 'react';
import { withStore } from '../../../Hocs/storeHoc';

const MessageInput = ({ store: { message, sendMessage, handleMessageChange } }) => {
    return (
        <div className="message-input">
            <div className="wrap">
                <form onSubmit={sendMessage}>
                    <input type="text" onChange={handleMessageChange} value={message} placeholder="Write your message..." />
                    <div className="message-input-controls d-flex justify-content-between align-items-center">
                        <i className="fa fa-paperclip attachment" aria-hidden="true" />
                        <button className="submit" type="submit">
                            <i className="fa fa-paper-plane" aria-hidden="true" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default withStore(MessageInput);

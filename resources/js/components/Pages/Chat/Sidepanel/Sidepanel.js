import React, { Component } from 'react';
import Profile from './Profile/Profile';
import Search from './Search/Search';
import Contacts from './Contacts/Contacts';

class Sidepanel extends Component {
    state = {};
    render() {
        return (
            <div id="sidepanel">
                <Profile />
                <Search />
                <Contacts />
                <div id="bottom-bar">
                    <button id="addcontact">
                        <i className="fa fa-user-plus fa-fw" aria-hidden="true" /> <span>Add contact</span>
                    </button>
                    <button id="settings">
                        <i className="fa fa-cog fa-fw" aria-hidden="true" /> <span>Settings</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default Sidepanel;

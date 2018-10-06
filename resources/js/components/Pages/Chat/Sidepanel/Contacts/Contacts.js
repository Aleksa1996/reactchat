import React from 'react';

const Contacts = () => {
    return <div id="contacts">
        <ul>
            <li className="contact">
                <div className="wrap">
                    <span className="contact-status online"></span>
                    <img src="http://emilcarlsson.se/assets/louislitt.png" alt="" />
                    <div className="meta">
                        <p className="name">Louis Litt</p>
                        <p className="preview">You just got LITT up, Mike.</p>
                    </div>
                </div>
            </li>
            <li className="contact active">
                <div className="wrap">
                    <span className="contact-status busy"></span>
                    <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                    <div className="meta">
                        <p className="name">Harvey Specter</p>
                        <p className="preview">Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
                    </div>
                </div>
            </li>
            <li className="contact">
                <div className="wrap">
                    <span className="contact-status away"></span>
                    <img src="http://emilcarlsson.se/assets/rachelzane.png" alt="" />
                    <div className="meta">
                        <p className="name">Rachel Zane</p>
                        <p className="preview">I was thinking that we could have chicken tonight, sounds good?</p>
                    </div>
                </div>
            </li>
            <li className="contact">
                <div className="wrap">
                    <span className="contact-status"></span>
                    <img src="http://emilcarlsson.se/assets/haroldgunderson.png" alt="" />
                    <div className="meta">
                        <p className="name">Harold Gunderson</p>
                        <p className="preview">Thanks Mike! :)</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>;
}

export default Contacts;

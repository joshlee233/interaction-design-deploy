import React from "react";
import './modal.css';

export const Modal = ({ show, close }) => {
    return (
        <div className="modal-wrapper"
            style={{
                transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
                opacity: show ? '1' : '0'
            }}
        >
            <div className="modal-header">
            <h4>Mailing list</h4>
                <span onClick={close} className="close-modal-btn">x</span>               
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <p>Please sign up to our mailing list to recieve exclusive updates and content about our charity</p>
                    <div className="email-form">
                        <input placeholder="Enter email..." className="email-address" type="email"/>
                        <button type="submit" className="btn-submit">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
};
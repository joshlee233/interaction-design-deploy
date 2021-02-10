import React from "react";
import styled from 'styled-components';
import './buttons.css';

const Button = styled.button`
    background-color:#70c2c4;
    color:white;
    padding:10px 20px;
    border-radius:5px;
    border:none;
    cursor:pointer;
    box-shadow:0px 2px 2px lightgray;
    text-transform:uppercase;
    transition: ease background-color 250ms;
    outline:0;
    &:hover {
        background-color:cadetblue;
    }
`;

function clickMe(){
    alert('You clicked me!');
}

export const Buttons = () => {
    return (
        <div className="all-buttons">
            <h1>Buttons!</h1>
            <p>Button with alert action:<Button onClick={clickMe}>Button</Button></p>
            <p>Disabled<button className="disabled">Button</button></p>
            <p>Active<button className="active">Button</button></p>
        </div>
    )
}
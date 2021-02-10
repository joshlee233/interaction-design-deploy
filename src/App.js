import React, { useState } from "react";
import { Modal } from './components/modal/Modal';
import { Buttons } from './components/buttons/buttons.js';
import { Search } from './components/searchbar/search';
import styled, {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme, GlobalStyles} from './components/toggle/toggle.js'
import { Card } from './components/cards/Card.js'

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

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
    margin:20px;
    outline:0;
    &:hover {
        background-color:cadetblue;
    }
`;


const StyledApp = styled.div`
    color: ${(props) => props.theme.fontColor};
`;

function App() {
    const [show, setShow] = useState(true);

    const close = () => setShow(false);

    const [theme, setTheme] = useState('light');

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}><div className="App">
            <GlobalStyles />
            <StyledApp>
                <center><h1>Toggle light/dark mode using the switch below</h1>
                <Button onClick={() => themeToggler()}>Change Theme</Button></center>
            </StyledApp>
            <Router>
            <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/Modal">Modal</Link>
                    </li>
                    <li>
                    <Link to="/Buttons">Buttons</Link>
                    </li>
                    <li>
                    <Link to="/Search">Search</Link>
                    </li>
                    <li>
                    <Link to="/Card">Card</Link>
                    </li>
                </ul>
            </nav>
                

                <Switch>
                    <Route path="/Modal">
                        { show ? <div onClick={close} className="back-drop"></div> : null }
                        {/*<button onClick={() => setShow(true)} className="btn-openModal">Open Modal</button>*/}
                        <p>Modal is set to show over the main content when a user joins the website so that the newsletter is the first thing they think of doing, especially if you offer a reward with it.</p>
                        <Modal show={show} close={close} />
                    </Route>
                    <Route path="/buttons">
                        <Buttons />
                    </Route>
                    <Route path="/Search">
                        <Search />
                    </Route>
                    <Route path="/Card">
                        <Card title='Card Title' imageUrl='https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg' body='
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus lectus vitae ipsum dapibus, viverra tincidunt enim facilisis. Sed in tristique urna. '/>
                    </Route>
                </Switch>

            </Router>
        </div></ThemeProvider>

        
    )
};

export default App;


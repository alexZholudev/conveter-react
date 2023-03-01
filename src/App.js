import React, {useEffect, useState} from 'react';
import './App.css';
import './index.css';
import Header from './components/Header';
import {Footer} from "./components/Footer/Footer";
import {Main} from "./components/Main/Main";

function App() {

    // useEffect(() => {
    //     const block = document.body;
    //     const indicator = document.createElement('div');
    //     block.append(indicator);
    //     const w1 = block.offsetWidth;
    //     // block.style.overflowY = 'scroll';
    //     const w2 = block.offsetWidth;
    //     block.removeChild(indicator);
    //     const scrollbar = w1 - w2;
    //     document.documentElement.style.setProperty('--scroll', `${scrollbar}px`);
    // }, []);



    return (
        <div className="App">
            <Header />
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;

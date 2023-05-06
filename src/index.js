import React from 'react';
import ReactDom from 'react-dom';
import ReactPlayer from "react-player";
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import Img from './components/Img.js';
import Footer from './components/Footer.js';
import './components/styles/index.css';


function Game () {
    return (
        <>
            <Header />
            <Navbar />
            <Img />
            <ReactPlayer url='https://fb.watch/kl3r5xsMQB' />
            <Footer />
        </>
    );

}

ReactDom.render(<Game />, document.getElementById('root'))

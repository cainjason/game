import React from 'react';
import ReactDom from 'react-dom';
import ReactPlayer from "react-player";

function Game () {
    return (
        <>
            <h1> Testing out components </h1>
            <ReactPlayer url='https://fb.watch/kl3r5xsMQB' />
        </>
    );

}

ReactDom.render(<Game />, document.getElementById('root'))

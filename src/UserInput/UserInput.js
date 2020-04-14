import React from 'react';

const userInput = (props) => {
    const inputstyle = {
        border: '2px solid red'
    }
    return <input type="text" onChange={props.changed} value={props.currentName} style={inputstyle}/>;
};

export default userInput;
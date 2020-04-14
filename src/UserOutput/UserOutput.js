import React from 'react';
import './userOutput.css';

const userOutput = (props) => {
    return (
        <div className="userOutput">
                <p>UserName:{props.userName}</p>
                <p>I hope I'll be overwritten!</p>
        </div>
    );
};

export default userOutput;